import pool from "../config/db.js";

export const createCategory = async (name) => {
    const result = await pool.query("INSERT INTO categories (name) VALUES ($1) RETURNING *", [name]);
    return result.rows[0];
}

export const getAllCategories = async () => {
    const result = await pool.query("SELECT * from categories");
    return result.rows;
}

export const getCategoryById = async (id) => {
    const result = await pool.query("SELECT * FROM categories WHERE category_id = $1", [id]);
    return result.rows[0];
}

export const getCategoryByName = async (name) => {
    const result = await pool.query("SELECT * FROM categories WHERE name = $1", [name]);
    return result.rows[0];
}

export const updateCategory = async (id, name) => {
    const result = await pool.query("UPDATE categories SET name = $1 WHERE category_id = $2 RETURNING *", [name, id]);
    return result.rows[0];
}

export const deleteCategory = async (id) => {
    await pool.query("DELETE FROM categories WHERE category_id = $1", [id]);
}