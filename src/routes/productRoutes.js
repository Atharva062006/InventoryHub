import { Router } from "express";

import { verifyToken } from "../middlewares/authMiddleware.js";

import {
    createProduct,
    getAllProducts,
    getProductById
} from "../controllers/productController.js";

const productRouter = Router();

productRouter.post("/", verifyToken, createProduct);
productRouter.get("/", verifyToken, getAllProducts);
productRouter.get("/:id", verifyToken, getProductById);

export default productRouter;