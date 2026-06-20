import { Router } from "express";
import { healthCheck } from "../controllers/healthController.js";

const healthRouter = Router();

// Health check route
healthRouter.get("/", healthCheck);


export default healthRouter;