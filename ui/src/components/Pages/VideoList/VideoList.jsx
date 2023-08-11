import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Skeleton, Stack, Typography } from "@mui/material";
import "./VideoList.css";
import VideoCard from "../../Common/VideoCard/VideoCard";

const data = [
  {
    src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
    title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
    channel: "Don Diablo",
    views: "396k views",
    createdAt: "a week ago",
  },
  {
    src: "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
    title: "Queen - Greatest Hits",
    channel: "Queen Official",
    views: "40M views",
    createdAt: "3 years ago",
  },
  {
    src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
    title: "Calvin Harris, Sam Smith - Promises (Official Video)",
    channel: "Calvin Harris",
    views: "130M views",
    createdAt: "10 months ago",
  },
];

function VideoList() {
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState([]);
  const pages = ["Live", "Recommendations"];
  const videos = ["video 1", "video 2", "video 3", "video 4"];

  const fetchData = () => {
    setVideo(data);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 3000);
  });

  return (
    <>
      <Container>
        <Stack direction={"row"} marginTop={5} gap={1}>
          {pages.map((page) => (
            <Button key={page} variant="outlined" className="video-pages" color="success">
              {page}
            </Button>
          ))}
        </Stack>

        <VideoCard loading={loading} data={data} />

        {/* <Stack direction={"row"} flexWrap={"wrap"} marginY={5}>
          {videos.map((video) => (
            <VideoCard key={video} video={video} />
          ))}
        </Stack> */}
      </Container>
    </>
  );
}

export default VideoList;
