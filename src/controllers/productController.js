import {
    createProductService
} from "../services/productService.js";

import handleResponse from "../util/handleResponse.js";

export const createProduct = async(req, res) => {
    const {name, stock_quantity, price, category_id} = req.body;
    if(!name || !stock_quantity|| !price|| !category_id) {
        return handleResponse(res, 400, "Name, stock quantity, price and category ID are all required");
    }

    try {
        const product = await createProductService(name, stock_quantity, price, category_id);

        return handleResponse(res, 201, "Product created successfully", product);
    } catch(error) {
        
        return handleResponse(res, 500, error.message);
    }
}