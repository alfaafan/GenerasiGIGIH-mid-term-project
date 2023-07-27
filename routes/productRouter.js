import express from "express";
const router = express.Router();

router.get("/products", (req, res) => {
  res.send("Products");
});
router.get("/products/:productId", (req, res) => {
  res.send("Products with Id");
});

export { router };
