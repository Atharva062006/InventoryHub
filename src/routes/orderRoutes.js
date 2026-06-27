import { Router } from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { createOrder, getOrders, getOrderById } from "../controllers/orderController.js";

const orderRouter = Router();

orderRouter.use(verifyToken);

/**
 * @openapi
 * /api/v1/orders:
 *   post:
 *     summary: Create an order
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - items
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *     responses:
 *       201:
 *         description: Order created successfully
 */
orderRouter.post("/", createOrder);

/**
 * @openapi
 * /api/v1/orders:
 *   get:
 *     summary: Get all orders for the current user
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Orders retrieved successfully
 */
orderRouter.get("/", getOrders);

/**
 * @openapi
 * /api/v1/orders/{id}:
 *   get:
 *     summary: Get an order by ID
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Order retrieved successfully
 */
orderRouter.get("/:id", getOrderById);

export default orderRouter;