import { useEffect, useState } from "react";
import { useLoading } from "./useLoading";
import axios from "axios";
import { BASE_API_URL } from "../utils/api";

export const useCommentList = (videoId) => {
  const [commentList, setCommentList] = useState([]);
  const { setLoading } = useLoading();

  const getCommentList = async (videoId) => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_API_URL}/api/videos/${videoId}/comments`);
      setCommentList(response.data.data);
      console.log(commentList);
      setLoading(false);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getCommentList(videoId);
  }, []);

  return { commentList };
};
