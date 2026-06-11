import pool from "../config/db.js";

export const healthCheck = async (req, res) => {
    try {
        const result = await pool.query("SELECT current_database()");
        res.json({
            status: "OK",
            database: result.rows[0].current_database
        });
    } catch (error) {
        res.status(500).json({
            status: "ERROR"
        });
    }
    
}