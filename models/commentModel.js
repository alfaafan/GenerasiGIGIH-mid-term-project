import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    videoId: {
      type: Schema.Types.String,
      ref: "Videos",
    },
    username: {
      type: Schema.Types.String,
    },
    content: {
      type: Schema.Types.String,
    },
  },
  { timestamps: true }
);

const Comment = model("comments", commentSchema);
export default Comment;