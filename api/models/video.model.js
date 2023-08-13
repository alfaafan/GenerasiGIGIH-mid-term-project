import mongoose from "mongoose";
const { Schema, model } = mongoose;

const videoSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
      required: true,
    },
    channel: {
      type: Schema.Types.String,
    },
    description: {
      type: Schema.Types.String,
    },
    thumbnailUrl: {
      type: Schema.Types.String,
      required: true,
    },
    embeddedYoutubeUrl: {
      type: Schema.Types.String,
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
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

const Video = model("videos", videoSchema);
export default Video;
