import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  content: {
    type: Schema.Types.String,
  },
  timestamp: {
    type: Schema.Types.Date,
    required: true,
  }
});

export default model("comments", commentSchema);
