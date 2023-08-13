import Product from "../models/product.model.js";

export const getProductService = async (productId) => {
  return await Product.findById(productId).select("-video -version -__v");
};
