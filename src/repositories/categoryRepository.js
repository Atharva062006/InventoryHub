import pool from "../db.js";

export const createCategory = async (name) => {
    const result = await pool.query("INSERT INTO category (name) VALUES $1 RETURNING *", [name]);
    return result.rows[0];
}

export const getAllCategories = async () => {
    const result = await pool.query("SELECT * from category");
    return result.rows;
}

export const getCategoryById = async (id) => {
    const result = await pool.query("SELECT * FROM category WHERE category_id = id");
    return result.rows[0];
}