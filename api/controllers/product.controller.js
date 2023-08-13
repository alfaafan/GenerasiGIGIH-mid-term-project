import Product from "../models/product.model.js";
import { createProductService } from "../services/createProduct.service.js";
import { getProductService } from "../services/getProduct.service.js";
import { getProductsService } from "../services/getProducts.service.js";
import { error, success } from "../utils/apiResponse.js";

export const getAllProducts = async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const products = await getProductsService(videoId);
    console.log(products);

    res.status(200).json(success("Products retrieved", products));
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};

export const getProcuct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await getProductService(productId);

    if (!product) {
      return res.status(404).json(error("Product not found"));
    }

    res.status(200).json(success("Product retrieved", product));
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = {
      title: req.body.title,
      price: req.body.price,
      productUrl: req.body.productUrl,
      video: req.params.videoId,
    };

    if (!product.title || !product.price || !product.productUrl || !product.video) {
      return res.status(400).json(error("title, price, and thumbnailUrl, videoId are required"));
    }

    const newProduct = await createProductService(product);
    res.status(201).json(success("Product created", newProduct));
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};
