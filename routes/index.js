import express from "express";
const router = express.Router();
import { router as videoRouter } from "./videoRouter.js";
import { router as productsRouter } from "./productRouter.js";
import { router as commentsRouter } from "./commentRouter.js";

router.use("/videos", videoRouter);
router.use(productsRouter);
router.use(commentsRouter);

export default router;
