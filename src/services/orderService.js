import {
    createOrder,
    getOrdersByUserId,
    getOrderById,
    createOrderItem,
    getOrderItems
} from "../repositories/orderRepository.js";

import { 
    getProductById,
    updateProductStock 
} from "../repositories/productRepository.js";



export const createOrderService = async (user_id, items) => {

    if(!items || items.length === 0) {
        throw new Error("Order must contain items");
    }

    let totalCost = 0;

    for(const item of items) {
        const product = await getProductById(item.product_id);

        if(!product) {
            throw new Error("Product not found");
        }

        if(item.quantity <= 0) {
            throw new Error("Invalid Quantity");
        }

        if(item.quantity > product.stock_quantity) {
            throw new Error("Insufficient stock");
        }

        totalCost += product.price * item.quantity;
    }

    const order = await createOrder(user_id, totalCost);

    for(const item of items) {
        const product = await getProductById(item.product_id);

        await createOrderItem(order.order_id, product.product_id, item.quantity, product.price);

        const newStock = product.stock_quantity - item.quantity;

        await updateProductStock(product.product_id, newStock);
    }

    return order;
}