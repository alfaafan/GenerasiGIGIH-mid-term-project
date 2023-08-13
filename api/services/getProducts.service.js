import Product from "../models/product.model.js";

export const getProductsService = async (videoId) => {
  return await Product.findByVideoId(videoId);
};
