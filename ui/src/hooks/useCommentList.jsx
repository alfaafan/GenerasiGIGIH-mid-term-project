import { useEffect, useState } from "react";
import { useLoading } from "./useLoading";
import axios from "axios";
import { BASE_API_URL } from "../utils/api";

const useCommentList = (videoId) => {
  const [commentList, setCommentList] = useState();
  const { loading, setLoading } = useLoading();

  const getCommentList = async (videoId) => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_API_URL}/api/videos/${videoId}/comments`);
      setCommentList(response.data.data);
      setLoading(false);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getCommentList();
  }, []);

  return { commentList, loading };
};
