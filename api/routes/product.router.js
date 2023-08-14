import express from "express";
import { createProduct, getAllProducts, getProcuct } from "../controllers/product.controller.js";
const router = express.Router();

router.get("/videos/:videoId/products", getAllProducts);
router.get("/videos/:videoId/products/:productId", getProcuct);
router.post("/videos/:videoId/products/", createProduct);

export { router };
