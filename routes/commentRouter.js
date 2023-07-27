import express from "express";
import { getComments } from "../controllers/commentController.js";
const router = express.Router();

router.get("/comments", getComments);
router.post("/comments", (req, res) => {
  res.send("Posted Comments");
});
router.delete("/comments/:commentsId", (req, res) => {
  res.send("Deleted Comments");
});

export { router };
