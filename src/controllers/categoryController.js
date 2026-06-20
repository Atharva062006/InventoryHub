import { createCategoryService } from "../services/categoryService.js";
import handleResponse from "../util/handleResponse.js";

export const createCategory = async(req, res) => {
    const {name} = req.body;

    if(!name) {
        return handleResponse(res, 400, "Category name is required");
    }

    try {
        const category = await createCategoryService(name);

        return handleResponse(res, 201, "Category created successfully", category);
    }
    catch(error) {
        const statusCode = error.message === "Category already exists" ? 409 : 500;
        return handleResponse(res, statusCode, error.message);
    }
}