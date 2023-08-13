import Video from "../models/video.model.js";

export const createVideoService = async (video) => {
  const newVideo = new Video(video);
  await newVideo.save();
  return newVideo;
};
