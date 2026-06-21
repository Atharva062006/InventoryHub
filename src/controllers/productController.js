import {
    createProductService,
    getAllProductsService,
    getProductByIdService
} from "../services/productService.js";

import handleResponse from "../util/handleResponse.js";

export const createProduct = async(req, res) => {
    const {name, stock_quantity, price, category_id} = req.body;
    if(!name || stock_quantity === undefined || price === undefined || !category_id) {
        return handleResponse(res, 400, "Name, stock quantity, price and category ID are all required");
    }

    try {
        const product = await createProductService(name, stock_quantity, price, category_id);

        return handleResponse(res, 201, "Product created successfully", product);
    } catch(error) {

        return handleResponse(res, 500, error.message);
    }
}

export const getAllProducts = async(req, res) => {
    try {
        const products = await getAllProductsService();
        
        return handleResponse(res, 200, "Products fetched successfully", products);
    } catch(error) {
        return handleResponse(res, 500, error.message);
    }
}

export const getProductById = async (req, res) => {
    const {id} = req.body;
    
    try {
        const products = await getProductById(id);

        return handleResponse(res, 200, "Product fetched successfully", products);
    } catch {
        handleResponse(res, 500, error.message);
    }

}