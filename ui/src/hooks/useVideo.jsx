import { useEffect, useState } from "react";
import { useLoading } from "./useLoading";
import axios from "axios";
import { BASE_API_URL } from "../utils/api";

export const useVideo = (videoId) => {
  const { setLoading } = useLoading();
  const [video, setVideo] = useState({});

  const getVideo = async (videoId) => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_API_URL}/api/videos/${videoId}`);
      setVideo(response.data.data);
      setLoading(false);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getVideo(videoId);
  }, []);

  return { video };
};
