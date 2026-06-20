import cors from "cors";
import express from "express";

import healthRouter from "./routes/healthRoutes.js"
import authRouter from "./routes/authRoutes.js"
import categoryRouter from "./routes/categoryRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/health", healthRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/category", categoryRouter);

// Error handling middleware



export default app;
