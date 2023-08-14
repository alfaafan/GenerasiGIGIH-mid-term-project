import Comment from "../models/comment.model.js";
import { createCommentService } from "../services/createComment.service.js";
import { deleteCommentService } from "../services/deleteComment.service.js";
import { getCommentsService } from "../services/getComments.service.js";
import { error, success } from "../utils/apiResponse.js";

export const getComments = async (req, res) => {
  try {
    const videoId = req.params.videoId;

    const comments = await getCommentsService(videoId);

    res.status(200).json(success("Comments retrieved", comments));
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};

export const postComment = async (req, res) => {
  const data = { ...req.body, videoId: req.params.videoId };
  try {
    if (!data.username || !data.comment) {
      res.status(400).json(error("username and comment are required"));
    }

    const comment = await createCommentService(data);

    if (comment) {
      res.status(201).json(success("Comment posted successfully", comment));
    }
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};

export const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const deletedComment = await deleteCommentService(commentId);

    if (!deletedComment) {
      return res.status(404).json(error("Comments not found"));
    }

    res.status(200).json(success("Comment deleted successfully"));
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};
