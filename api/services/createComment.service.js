import Comment from "../models/comment.model.js";
import Video from "../models/video.model.js";

export const createCommentService = async (data) => {
  const { videoId, ...rest } = data;

  const video = await Video.findById(videoId);

  const comment = Comment.build({ ...rest, video });

  return await comment.save();
};
