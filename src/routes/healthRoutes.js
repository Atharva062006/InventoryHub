import { Router } from "express";
import { healthCheck } from "../controllers/healthController.js";

const healthRouter = Router();

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Health check
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Service is healthy
 */
// Health check route
healthRouter.get("/", healthCheck);


export default healthRouter;