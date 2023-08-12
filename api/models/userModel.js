import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    passsword: {
      type: Schema.Types.String,
      required: true,
    },
    pictureUrl: {
      type: Schema.Types.String,
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
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

userSchema.set("versionKey", "version");
userSchema.statics.build = function (attrs) {
  return new User(attrs);
};
userSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

const User = model("users", userSchema);
export default User;
