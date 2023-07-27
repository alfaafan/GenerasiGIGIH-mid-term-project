import Comment from "../models/commentModel.js";

export const getComments = async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const comments = await Comment.find({ videoId: videoId });
    res.status(200).json({
      status: 200,
      message: "Success",
      data: comments,
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
};
