import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";

import healthRouter from "./routes/healthRoutes.js"
import authRouter from "./routes/authRoutes.js"
import categoryRouter from "./routes/categoryRoutes.js";
import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import { swaggerSpec } from "./config/swagger.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/health", healthRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/orders", orderRouter)

// Error handling middleware



export default app;
