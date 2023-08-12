import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const products = await Product.find({ videoId: videoId });
    if (!products) {
      res.status(200).json({
        status: 200,
        message: "Success",
        data: "No products",
      });
    }
    res.status(200).json({
      status: 200,
      message: "Success",
      data: products,
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
};

export const getProcuct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        status: 404,
        message: "Product not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Success",
      data: product,
    });
  } catch (e) {
    res.status(500).json({ status: 500, message: e.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = {
      videoId: req.params.videoId,
      title: req.body.title,
      price: req.body.price,
      productUrl: req.body.productUrl,
    };

    if (!product.title || !product.price || !product.productUrl) {
      return res.status(400).json({
        status: 400,
        message: "title, price, and thumbnailUrl are required",
      });
    }

    const newProduct = await new Product(product).save();
    res.status(200).json({
      status: 200,
      message: "Success",
      data: newProduct,
    });
  } catch (e) {
    res.status(500).json({ status: 500, message: e.message });
  }
};