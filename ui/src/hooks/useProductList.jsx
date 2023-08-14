import { useEffect, useState } from "react";
import { useLoading } from "./useLoading";
import axios from "axios";
import { BASE_API_URL } from "../utils/api";

export const useProductList = (videoId) => {
  const [productList, setProductList] = useState([]);
  const { setLoading } = useLoading();

  const getProducts = async (videoId) => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_API_URL}/api/videos/${videoId}/products`);
      setProductList(response.data.data);
      setLoading(false);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getProducts(videoId);
  }, []);

  return { productList };
};
