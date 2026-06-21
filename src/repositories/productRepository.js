import pool from "../config/db.js";

export const createProduct = async (name, stock_quantity, price, category_id) => {
    const result = await pool.query("INSERT INTO products (name, stock_quantity, price, category_id) VALUES ($1, $2, $3, $4) RETURNING *", 
        [name, stock_quantity, price, category_id]);
    return result.rows[0];
}

export const getAllProducts = async () => {
    const result = await pool.query("SELECT * FROM products");
    return result.rows;
}

export const getProductById = async (id) => {
    const result = await pool.query("SELECT * FROM products WHERE product_id = $1", [id]);
    return result.rows[0];
}

export const getProductByName = async (name) => {
    const result = await pool.query("SELECT * FROM products WHERE LOWER(name) = LOWER($1)", [name]);
    return result.rows[0];
}

export const updateProduct = async (id, name, stock_quantity, price, category_id) => {
    const result = await pool.query("UPDATE products SET name = $1, stock_quantity = $2, price = $3, category_id = $4 WHERE product_id = $5 RETURNING *", 
        [name, stock_quantity, price, category_id, id]);
    return result.rows[0];
}

export const updateProductStock = async (id, newStock) => {
    const result = await pool.query("UPDATE products SET stock_quantity = $1 WHERE product_id = $2 RETURNING *", 
        [newStock, id]);
    return result.rows[0];
}

export const deleteProduct = async (id) => {
    await pool.query("DELETE FROM products WHERE product_id = $1", [id]);
}