import { useContext, useState } from "react";
import { LoadingContext } from "../context/LoadingContext";

export const useLoading = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  return {
    loading,
    setLoading,
  };
};
