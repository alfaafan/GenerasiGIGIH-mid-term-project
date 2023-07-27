import Comment from "../models/commentModel.js";

export const getComments = async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const comments = await Comment.find({ videoId: videoId });
    if (!comments) {
      res.status(200).json({
        status: 200,
        message: "Success",
        data: "No Comments",
      });
    }
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

export const postComment = async (req, res) => {
  try {
    const comment = {
      videoId: req.params.videoId,
      username: req.body.username,
      content: req.body.content,
    };

    if (!comment.content || !comment.username) {
      return res.status(400).json({
        status: 400,
        message: "username and content are required",
      });
    }

    const newComment = await new Comment(comment).save();
    res.status(201).json({
      status: 200,
      message: "Success",
      data: newComment,
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const deletedComment = await Comment.findOneAndDelete({ _id: commentId });

    if (!deletedComment) {
      return res.status(404).json({
        status: 404,
        message: "Comments not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Comment deleted successfully",
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
};
