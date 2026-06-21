import { 
    createCategory,
    getAllCategories, 
    getCategoryById,
    getCategoryByName, 
    updateCategory,
    deleteCategory
} from "../repositories/categoryRepository.js";

export const createCategoryService = async (name) => {
    
    const trimmedName = name.trim();
    if(!trimmedName) {
        throw new Error("Category name cannot be empty");
    }

    const existingCategory = await getCategoryByName(trimmedName);

    if(existingCategory) {
        throw new Error("Category already exists");
    }
    
    const category = await createCategory(name);
    return category;
}

export const getAllCategoriesService = async () => {
    const categories = await getAllCategories();
    return categories;
}

export const getCategoryByIdService = async (id) => {
    const category = await getCategoryById(id);
    if(!category) {
        throw new Error("Category not found");
    }  
    return category;
}

export const getCategoryByNameService = async (name) => {
    const category = await getCategoryByName(name);
    if(!category) {
        throw new Error("Category not found");
    }  
    return category;
}

export const updateCategoryService = async (id, name) => {
    const category = await getCategoryById(id);
    if(!category) {
        throw new Error("Category not found");
    }   
    if(await getCategoryByName(name)) {
        throw new Error("Category already exists");
    }
    const updatedCategory = await updateCategory(id, name);
    return updatedCategory;
}

export const deleteCategoryService = async (id) => {
    const category = await getCategoryById(id);
    if(!category) {
        throw new Error("Category not found");
    }
    await deleteCategory(id); 
    return;
}
