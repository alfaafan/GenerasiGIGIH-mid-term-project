import express from "express";
const router = express.Router();
import { router as videoRouter } from "./video.router.js";
import { router as productsRouter } from "./product.router.js";
import { router as commentsRouter } from "./comment.router.js";

router.use("/videos", videoRouter);
router.use(productsRouter);
router.use(commentsRouter);

export default router;
