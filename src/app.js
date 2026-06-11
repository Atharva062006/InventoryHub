import cors from "cors";
import express from "express";

import healthRoutes from "./routes/healthRoutes.js"
import authRoutes from "./routes/authRoutes.js"

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/health", healthRoutes);
app.use("/api/v1/auth", authRoutes);

// Error handling middleware



export default app;
