import { Router } from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";

import { 
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
} from "../controllers/categoryController.js";

const categoryRouter = Router();

categoryRouter.post("/", verifyToken, createCategory);
categoryRouter.get("/", verifyToken, getAllCategories);
categoryRouter.get("/:id", verifyToken, getCategoryById);
categoryRouter.put("/:id", verifyToken, updateCategory);
categoryRouter.delete("/:id", verifyToken, deleteCategory);

export default categoryRouter;