import { Router } from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { createOrder } from "../controllers/orderController.js";

const orderRouter = Router();

orderRouter.use(verifyToken);
orderRouter.post("/", createOrder);

export default orderRouter;