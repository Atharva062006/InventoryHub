import { createOrderService, getOrdersByUserService, getOrderByIdService } from "../services/orderService.js";
import handleResponse from "../util/handleResponse.js";

export const createOrder = async (req, res) => {
    const {items} = req.body;
    const user_id = req.user.id;

    try {
        const order = await createOrderService(user_id, items);
        return handleResponse(res, 201, "Order created succesfully", order);
    } catch (error) {
        return handleResponse(res, 500, error.message);
    }
}

export const getOrders = async (req, res) => {
    const user_id = req.user.id;
    try {
        const orders = await getOrdersByUserService(user_id);
        return handleResponse(res, 200, "Orders retrieved successfully", orders);
    } catch (error) {
        return handleResponse(res, 500, error.message);
    }
}

export const getOrderById = async (req, res) => {
    const { id } = req.params;
    const user_id = req.user.id;
    try {
        const order = await getOrderByIdService(id, user_id);
        return handleResponse(res, 200, "Order retrieved successfully", order);
    } catch (error) {
        const statusCode = error.message === "Order not found" ? 404 : 500;
        return handleResponse(res, statusCode, error.message);
    }
}