import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
      required: true,
    },
    price: {
      type: Schema.Types.Number,
      required: true,
      min: 0,
    },
    img: {
      type: Schema.Types.String,
      required: true,
    },
    link: {
      type: Schema.Types.String,
      required: true,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
  },
  {
    toJSON: {
      transform(_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

productSchema.set("versionKey", "version");
// productSchema.set("bufferCommands", false);
productSchema.statics.build = function (attrs) {
  return new Product(attrs);
};
productSchema.statics.findByVideoId = function (videoId) {
  return this.find({ video: videoId }).select("-video -version");
};

const Product = model("products", productSchema);
export default Product;
