import {
    createProduct,
    getAllProducts,
    getProductById,
    getProductByName,
    updateProduct,
    deleteProduct
} from "../repositories/productRepository.js";

import { getCategoryById } from "../repositories/categoryRepository.js";

export const createProductService = async (name, stock_quantity, price, category_id) => {
    if(!name.trim()) {
        throw new Error("Product name cannot be empty");
    }   
    if(stock_quantity < 0) {
        throw new Error("Stock quantity cannot be negative");
    }
    if(price <= 0) {
        throw new Error("Price must be greater than 0");
    }
    if(!await getCategoryById(category_id)) {
        throw new Error("Category not found");
    }

    const existingProducts = await getProductByName(name.trim());
    if(existingProducts) {
        throw new Error("Product with the same name already exists");
    }

    const product = await createProduct(name.trim(), stock_quantity, price, category_id);
    return product;
}

export const getAllProductsService = async () => {
    const products = await getAllProducts();
    return products;
}

export const getProductByIdService = async (id) => {
    const product = await getProductById(id);
    if(!product) {
        throw new Error("Product not found");
    }
    return product;
}

export const updateProductService = async (id, name, stock_quantity, price, category_id) => {
    const product = await getProductById(id);
    if(!product) {
        throw new Error("Product not found");
    }
    if(!name.trim()) {
        throw new Error("Product name cannot be empty");
    }
    if(stock_quantity < 0) {
        throw new Error("Stock quantity cannot be negative");
    }
    if(price <= 0) {
        throw new Error("Price must be greater than 0");
    }
    if(!await getCategoryById(category_id)) {
        throw new Error("Category not found");
    }

    const existingProduct = await getProductByName(name.trim());
    if(existingProduct && existingProduct.product_id !== Number(id)) {
        throw new Error("Product with the same name already exists");
    }
    const updatedProduct = await updateProduct(id, name.trim(), stock_quantity, price, category_id);
    return updatedProduct;
}

export const deleteProductService = async (id) => {
    const product = await getProductById(id);
    if(!product) {
        throw new Error("Product not found");
    }
    await deleteProduct(id);
}