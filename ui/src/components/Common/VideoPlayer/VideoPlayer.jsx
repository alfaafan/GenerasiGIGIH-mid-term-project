import { Box, Container, Typography } from "@mui/material";
import React from "react";

function VideoPlayer({ embeddedYoutubeUrl, title, description }) {
  return (
    <Container>
      <Box>
        <iframe
          src={embeddedYoutubeUrl}
          title="YouTube video player"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ border: "none", width: "100%", height: "30rem" }}
        />
      </Box>
      <Box mt={3}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle2" mt={2}>
          {description ? description : "No description given"}
        </Typography>
      </Box>
    </Container>
  );
}

export default VideoPlayer;
