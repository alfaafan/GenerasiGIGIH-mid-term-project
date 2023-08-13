import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    username: {
      type: Schema.Types.String,
      required: true,
    },
    comment: {
      type: Schema.Types.String,
      required: true,
    },
    timestamp: {
      type: Schema.Types.Date,
      default: new Date(),
      required: true,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Videos",
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

commentSchema.set("versionKey", "version");
commentSchema.statics.build = function (attrs) {
  return new Comment(attrs);
};
commentSchema.statics.findByVideoId = function (videoId) {
  return this.find({ video: videoId }).select("-video -version").sort("timestamp");
};

const Comment = model("comments", commentSchema);
export default Comment;
