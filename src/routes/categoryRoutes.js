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

categoryRouter.use(verifyToken);
categoryRouter.post("/", createCategory);
categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id", getCategoryById);
categoryRouter.put("/:id", updateCategory);
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;