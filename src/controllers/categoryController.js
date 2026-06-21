import { 
    createCategoryService, 
    getAllCategoriesService, 
    getCategoryByIdService, 
    getCategoryByNameService, 
    updateCategoryService,
    deleteCategoryService
} from "../services/categoryService.js";

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

export const getAllCategories = async(req, res) => {
    try {
        const categories = await getAllCategoriesService();
        return handleResponse(res, 200, "Categories retrieved successfully", categories);
    }
    catch(error) {
        return handleResponse(res, 500, error.message);
    }
}

export const getCategoryById = async(req, res) => {
    const {id} = req.params;
    try {
        const category = await getCategoryByIdService(id);
        return handleResponse(res, 200, "Category retrieved successfully", category);
    }
    catch(error) {
        const statusCode = error.message === "Category not found" ? 404 : 500;
        return handleResponse(res, statusCode, error.message);
    }
}

export const updateCategory = async(req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    if(!name) {
        return handleResponse(res, 400, "Category name is required");
    }
    try {
        const updatedCategory = await updateCategoryService(id, name);
        return handleResponse(res, 200, "Category updated successfully", updatedCategory);
    }
    catch(error) {
        const statusCode = error.message === "Category not found" ? 404 : error.message === "Category already exists" ? 409 : 500;
        return handleResponse(res, statusCode, error.message);
    }
}

export const deleteCategory = async(req, res) => {
    const {id} = req.params;
    try {
        await deleteCategoryService(id);
        return handleResponse(res, 200, "Category deleted successfully");
    }
    catch(error) {
        const statusCode = error.message === "Category not found" ? 404 : 500;
        return handleResponse(res, statusCode, error.message);
    }
}