import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../../Common/ProductCard/ProductCard";
import VideoPlayer from "../../Common/VideoPlayer/VideoPlayer";
import CommentList from "../../Common/CommentList/CommentList";
import CommentForm from "../../UI/CommentForm/CommentForm";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import { useProductList } from "../../../hooks/useProductList";
import { useVideo } from "../../../hooks/useVideo";
import { useCommentList } from "../../../hooks/useCommentList";
import { useCommentForm } from "../../../hooks/useCommentForm";

const useStyles = makeStyles(() => ({
  root: {
    overflow: "auto", // Enable scrolling
    "&::-webkit-scrollbar": {
      width: "0.4em", // Set the width of the scrollbar
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent", // Hide the thumb
    },
  },
}));

function VideoDetail() {
  const { videoId } = useParams();
  const classes = useStyles();
  const { productList } = useProductList(videoId);
  const { commentList } = useCommentList(videoId);
  const { video } = useVideo(videoId);
  const { username, setUsername, comment, setComment, handleSubmit } = useCommentForm(videoId);

  return (
    <Grid container direction={"row"} marginTop={3} paddingX={2} wrap="nowrap">
      <Grid item xs={12} sm={6} md={2.5} className={classes.root} height="85vh">
        <Grid container>{productList && productList.map((product, index) => <Paper component={ProductCard} key={index} title={product.title} price={product.price} imageSrc={product.img} link={product.link} />)}</Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={6.5} height="65vh">
        <VideoPlayer embeddedYoutubeUrl={video.embeddedYoutubeUrl} title={video.title} description={video.description} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h5" gutterBottom textAlign={"center"}>
          Comments
        </Typography>
        <Grid item className={classes.root} xs height="65vh" p={3}>
          <CommentList commentList={commentList} />
        </Grid>
        <Grid item xs p={3}>
          <CommentForm username={username} setUsername={setUsername} comment={comment} setComment={setComment} handleSubmit={handleSubmit} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default VideoDetail;
