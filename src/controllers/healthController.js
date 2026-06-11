import pool from "../config/db.js";

export const healthCheck = async (req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.json({
        status: "OK",
        database: result.rows[0].current_database
    });
}