import { useEffect, useState } from "react";
import { Button, Container, Grid, Stack } from "@mui/material";
import "./VideoList.css";
import VideoCard from "../../Common/VideoCard/VideoCard";
import { useVideoList } from "../../../hooks/useVideoList";
import { useLoading } from "../../../hooks/useLoading";

// const data = [
//   {
//     id: "123",
//     src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
//     title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
//     channel: "Don Diablo",
//     views: "396k views",
//     createdAt: "a week ago",
//   },
//   {
//     id: "234",
//     src: "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
//     title: "Queen - Greatest Hits",
//     channel: "Queen Official",
//     views: "40M views",
//     createdAt: "3 years ago",
//   },
//   {
//     id: "345",
//     src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
//     title: "Calvin Harris, Sam Smith - Promises (Official Video)",
//     channel: "Calvin Harris",
//     views: "130M views",
//     createdAt: "10 months ago",
//   },
//   {
//     id: "123",
//     src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
//     title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
//     channel: "Don Diablo",
//     views: "396k views",
//     createdAt: "a week ago",
//   },
//   {
//     id: "234",
//     src: "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
//     title: "Queen - Greatest Hits",
//     channel: "Queen Official",
//     views: "40M views",
//     createdAt: "3 years ago",
//   },
//   {
//     id: "345",
//     src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
//     title: "Calvin Harris, Sam Smith - Promises (Official Video)",
//     channel: "Calvin Harris",
//     views: "130M views",
//     createdAt: "10 months ago",
//   },
//   {
//     id: "123",
//     src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
//     title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
//     channel: "Don Diablo",
//     views: "396k views",
//     createdAt: "a week ago",
//   },
//   {
//     id: "234",
//     src: "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
//     title: "Queen - Greatest Hits",
//     channel: "Queen Official",
//     views: "40M views",
//     createdAt: "3 years ago",
//   },
//   {
//     id: "345",
//     src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
//     title: "Calvin Harris, Sam Smith - Promises (Official Video)",
//     channel: "Calvin Harris",
//     views: "130M views",
//     createdAt: "10 months ago",
//   },
// ];

function VideoList() {
  const { videoList } = useVideoList();
  const { loading } = useLoading();
  const pages = ["Home", "Recommendations"];
  const [activeButton, setActiveButton] = useState("Home");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <Container>
        <Stack direction={"row"} marginTop={5} gap={1}>
          {pages.map((page) => (
            <Button key={page} variant={activeButton === page ? "contained" : "outlined"} onClick={() => handleButtonClick(page)} className="video-pages" color="success">
              {page}
            </Button>
          ))}
        </Stack>
        <Grid container gap={2}>
          {videoList.map((video) => (
            <VideoCard key={video.id} loading={loading} video={video} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default VideoList;
