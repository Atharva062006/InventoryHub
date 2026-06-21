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

export const getProductsByName = async (name) => {
    const result = await pool.query("SELECT * FROM products WHERE name ILIKE $1", [`%${name}%`]);
    return result.rows;
}