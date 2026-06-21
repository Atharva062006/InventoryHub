import { Router } from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { createOrder, getOrders, getOrderById } from "../controllers/orderController.js";

const orderRouter = Router();

orderRouter.use(verifyToken);
orderRouter.post("/", createOrder);
orderRouter.get("/", getOrders);
orderRouter.get("/:id", getOrderById);

export default orderRouter;