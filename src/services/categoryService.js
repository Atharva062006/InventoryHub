import { 
    createCategory,
    getAllCategories, 
    getCategoryById 
} from "../repositories/categoryRepository";

export const createCategoryService = async (name) => {
    const category = await createCategory(name);
    return category;
}