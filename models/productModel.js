import mongoose, { SchemaType } from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  price: {
    type: Schema.Types.Number,
    required: true,
  },
  product_url: {
    type: Schema.Types.String,
    required: true,
  },
});

export default model("products", productSchema);
