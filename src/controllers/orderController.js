import { createOrderService } from "../services/orderService.js";
import handleResponse from "../util/handleResponse.js";

export const createOrder = async (req, res) => {
    const {items} = req.body;
    const user_id = req.user_id;

    try {
        const product = createOrderService(user_id, items);
    } catch (error) {
        return handleResponse(res, 500, error.message);
    }
}