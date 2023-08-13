import Video from "../models/video.model.js";
import { createVideoService } from "../services/createVideo.service.js";
import { getVideoService } from "../services/getVideo.service.js";
import { getVideosService } from "../services/getVideos.service.js";
import { error, success } from "../utils/apiResponse.js";

export const getAllVideos = async (req, res) => {
  try {
    const videos = await getVideosService(req.query.search);

    if (!videos) {
      return res.status(404).json(error("Videos not found"));
    }

    res.status(200).json(success("Videos retrieved", videos));
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};

export const getVideo = async (req, res) => {
  try {
    const videoId = req.params.videoId;
    const video = await getVideoService(videoId);

    if (!video) {
      return res.status(404).json(error("Video not found"));
    }

    res.status(200).json(success("Video retrieved", video));
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};

export const createVideo = async (req, res) => {
  try {
    const video = {
      title: req.body.title,
      channel: req.body.channel,
      description: req.body.description,
      thumbnailUrl: req.body.thumbnailUrl,
      embeddedYoutubeUrl: req.body.embeddedYoutubeUrl,
    };

    if (!video.thumbnailUrl || !video.channel || !video.title || !video.embeddedYoutubeUrl) {
      return res.status(400).json(error("Insufficent Parameter"));
    }

    const newVideo = await createVideoService(video);

    res.status(201).json(success("Video created", newVideo));
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};
