import pool from "../config/db.js";

export const createOrder = async (user_id, total_cost) => {
    const result = await pool.query("INSERT INTO orders (user_id, total_cost) VALUES ($1, $2) RETURNING *", 
        [user_id, total_cost]);
    return result.rows[0];
}

export const getOrdersByUserId = async (user_id) => { 
    const result = await pool.query("SELECT * FROM orders WHERE user_id = $1", [user_id]);
    return result.rows;
}

export const getOrderById = async (order_id) => {
    const result = await pool.query("SELECT * FROM orders WHERE order_id = $1", [order_id]);
    return result.rows[0];
}

export const createOrderItem = async (order_id, product_id, quantity, price_at_purchase) => {
    const result = await pool.query("INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase) VALUES ($1, $2, $3, $4) RETURNING *", 
        [order_id, product_id, quantity, price_at_purchase]);
    return result.rows[0];
}

export const getOrderItems = async (order_id) => {
    const result = await pool.query("SELECT * FROM order_items WHERE order_id = $1", [order_id]);
    return result.rows;
}