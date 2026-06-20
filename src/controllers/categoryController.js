import handleResponse from "../util/handleResponse.js";

export const createCategory = async(req, res) => {
    const {name} = req.body;

    if(!name) {
        handleResponse(res, 400, "Category name is required");
    }

    try {
        const category = await createCategoryService(name);

        handleResponse(res, 201, "Category created successfully", category);
    }
    catch(err) {
        return handleResponse(res, 500, "Internal Server Error");
    }
}