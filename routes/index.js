import express from "express";
const router = express.Router();
import { router as videoRouter } from "./videoRouter.js";
import { router as productsRouter } from "./productRouter.js";
import { router as commentsRouter } from "./commentRouter.js";

router.use("/videos", videoRouter);
router.use("/videos/:videoId", productsRouter);
router.use("/videos/:videoId", commentsRouter);

export default router;
