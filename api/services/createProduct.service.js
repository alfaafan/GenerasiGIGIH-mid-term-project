import Product from "../models/product.model.js";

export const createProductService = async (product) => {
  const newProduct = new Product(product);
  return await newProduct.save();
};
