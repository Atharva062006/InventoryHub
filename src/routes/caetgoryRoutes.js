import { Router } from "express";

import { createCategory } from "../controllers/categoryController.js";

const categoryRouter = Router();

categoryRouter.post("/create", createCategory);

export default categoryRouter;