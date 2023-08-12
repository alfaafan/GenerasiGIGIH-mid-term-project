import Video from "../models/videoModel.js";

export const getAllVideos = async (req, res) => {
  try {
    const data = await Video.find();
    res.status(200).json({
      status: 200,
      message: "Success",
      data: data,
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
};

export const getVideo = async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const data = await Video.findById(videoId);

    if (!data) {
      return res.status(404).json({
        status: 404,
        message: "Video not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Success",
      data: data,
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
};

export const createVideo = async (req, res) => {
  try {
    const video = {
      thumbnailUrl: req.body.thumbnailUrl,
    };

    if (!video.thumbnailUrl) {
      return res.status(400).json({
        status: 400,
        message: "thumbnailUrl is required",
      });
    }

    const newVideo = await new Video(video).save();
    res.status(200).json({
      status: 200,
      message: "Success",
      data: newVideo,
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};