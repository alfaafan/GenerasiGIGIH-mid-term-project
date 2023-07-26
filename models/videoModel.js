import mongoose from "mongoose";
const { Schema, model } = mongoose;

const videoSchema = new Schema({
  thumbnail_url: {
    type: Schema.Types.String,
  },
  content_url: {
    type: Schema.Types.String,
  },
});

export default model("videos", videoSchema);
