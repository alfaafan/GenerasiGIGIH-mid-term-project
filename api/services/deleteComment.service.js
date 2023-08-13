import Comment from "../models/comment.model.js";

export const deleteCommentService = async (commentId) => {
  return await Comment.findOneAndDelete({ _id: commentId });
};
