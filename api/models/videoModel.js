import mongoose from "mongoose";
const { Schema, model } = mongoose;

const videoSchema = new Schema({
  thumbnailUrl: {
    type: Schema.Types.String,
  },
});

const Video = model("videos", videoSchema);
export default Video;
