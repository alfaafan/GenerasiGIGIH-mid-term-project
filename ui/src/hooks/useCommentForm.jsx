import { useState } from "react";
import { useLoading } from "./useLoading";
import axios from "axios";
import { BASE_API_URL } from "../utils/api";
import { useCommentList } from "./useCommentList";

export const useCommentForm = (videoId) => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const { setLoading } = useLoading();
  const { commentList, setCommentList } = useCommentList(videoId);

  const video = videoId;

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_API_URL}/api/videos/${video}/comments`, {
        username,
        comment,
        video,
      });
      setComment("");
      setUsername("");
      setCommentList([...commentList, response.data.data]);
    } catch (e) {
      console.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    username,
    setUsername,
    comment,
    setComment,
    handleSubmit,
  };
};
