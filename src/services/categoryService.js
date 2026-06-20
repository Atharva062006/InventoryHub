import { 
    createCategory,
    getAllCategories, 
    getCategoryById,
    getCategoryByName 
} from "../repositories/categoryRepository.js";

export const createCategoryService = async (name) => {
    
    if(await getCategoryByName(name)) {
        throw new Error("Category already exists");
    }
    
    const category = await createCategory(name);
    return category;
}