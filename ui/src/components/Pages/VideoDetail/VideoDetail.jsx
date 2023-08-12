import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../../Common/ProductCard/ProductCard";
import VideoPlayer from "../../Common/VideoPlayer/VideoPlayer";
import CommentList from "../../Common/CommentList/CommentList";
import CommentForm from "../../UI/CommentForm/CommentForm";
import { makeStyles } from "@mui/styles";

const data = ["product 1", "product 2", "product 3"];

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
  const classes = useStyles();
  const [products, setProducts] = useState(null);

  const getProducts = () => {
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    // <Container>
    <Grid container direction={"row"} marginTop={3} paddingX={2} wrap="nowrap">
      {/* nanti set skeleton dulu */}
      <Grid container className={classes.root} xs height="85vh">
        {products && products.map((product, index) => <Paper component={ProductCard} key={index} name={product} imageSrc="https://placehold.co/600x400?text=Sample+Image" />)}
      </Grid>
      <Grid xs height="65vh">
        <VideoPlayer embeddedYoutubeUrl="https://www.youtube.com/embed/_NfnXdXpjL0" title="Never Meant" />
      </Grid>
      <Grid xs>
        <Typography variant="h5" gutterBottom textAlign={"center"}>
          Comments
        </Typography>
        <Grid className={classes.root} xs height="65vh" p={3}>
          <CommentList />
        </Grid>
        <Grid xs p={3}>
          <CommentForm />
        </Grid>
      </Grid>
    </Grid>
    // </Container>
  );
}

export default VideoDetail;
