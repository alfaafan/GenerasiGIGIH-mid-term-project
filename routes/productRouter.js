import express from "express";
import { getAllProducts, getProcuct } from "../controllers/productController.js";
const router = express.Router();

router.get("/videos/:videoId/products", getAllProducts);
router.get("/videos/:videoId/products/:productId", getProcuct);

export { router };
