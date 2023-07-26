import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
  },
  picture_url: {
    type: Schema.Types.String,
  },
});

export default model("users", userSchema);
