import pool from "../config/db.js";


export const createUser = async (name, email) => {
    const result = await pool.query("INSERT INTO users (name,email) VALUES ($1, $2) RETURNING *",
        [name,email]);
    return result.rows[0];
};

export const findUserById = async (id) => {
    const result = await pool.query("SELECT * FROM USERS WHERE user_id = $1", [id]);
    return result.rows[0];
};

export const findUserByEmail = async (email) => {
    const result = await pool.query("SELECT * FROM USERS WHERE email = $1", [email]);
    return result.rows[0];
};