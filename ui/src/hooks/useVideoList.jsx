import { useEffect, useState } from "react";
import axios from "axios";
import { useLoading } from "./useLoading";
import { BASE_API_URL } from "../utils/api";

export const useVideoList = () => {
  const [videoList, setVideoList] = useState([]);
  const { loading, setLoading } = useLoading();

  const getVideos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_API_URL}/api/videos`);
      setVideoList(response.data.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return { videoList, getVideos, loading };
};
