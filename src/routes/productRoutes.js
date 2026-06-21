import { Router } from "express";

import { verifyToken } from "../middlewares/authMiddleware.js";

import {
    createProduct
} from "../controllers/productController.js";

const productRouter = Router();

productRouter.post("/", verifyToken, createProduct);

export default productRouter;