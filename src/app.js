import cors from "cors";
import express from "express";

import healthRoutes from "./routes/healthRoutes.js"

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/health", healthRoutes);

// Error handling middleware



export default app;
