import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
  },
  pictureUrl: {
    type: Schema.Types.String,
  },
});

const User = model("users", userSchema);
export default User;
