import {
    createProduct,
    getAllProducts,
    getProductById,
    getProductsByName
} from "../repositories/productRepository.js";

import { getCategoryById } from "../repositories/categoryRepository.js";

export const createProductService = async (name, stock_quantity, price, category_id) => {
    if(!name.trim()) {
        throw new Error("Product name cannot be empty");
    }   
    if(stock_quantity < 0) {
        throw new Error("Stock quantity cannot be negative");
    }
    if(price < 0) {
        throw new Error("Price cannot be negative");
    }
    if(!await getCategoryById(category_id)) {
        throw new Error("Category not found");
    }

    const existingProducts = await getProductsByName(name.trim());
    if(existingProducts) {
        throw new Error("Product with the same name already exists");
    }

    const product = await createProduct(name.trim(), stock_quantity, price, category_id);
    return product;
}