import express from "express";
import { deleteComment, getComments, postComment } from "../controllers/comment.controller.js";
const router = express.Router();

router.get("/videos/:videoId/comments", getComments);
router.post("/videos/:videoId/comments", postComment);
router.delete("/videos/:videoId/comments/:commentId", deleteComment);

export { router };
