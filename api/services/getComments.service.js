import Comment from "../models/comment.model.js";

export const getCommentsService = async (videoId) => {
  return await Comment.findByVideoId(videoId);
};
