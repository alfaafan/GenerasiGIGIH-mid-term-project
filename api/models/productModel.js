import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  videoId: {
    type: Schema.Types.ObjectId,
  },
  title: {
    type: Schema.Types.String,
    required: true,
  },
  price: {
    type: Schema.Types.Number,
    required: true,
  },
  productUrl: {
    type: Schema.Types.String,
    required: true,
  },
});

const Product = model("products", productSchema);
export default Product;
