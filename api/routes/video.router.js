import express from "express";
import { createVideo, getAllVideos, getVideo } from "../controllers/video.controller.js";
const router = express.Router();

router.get("/", getAllVideos);
router.get("/:videoId", getVideo);
router.post("/", createVideo);

export { router };
