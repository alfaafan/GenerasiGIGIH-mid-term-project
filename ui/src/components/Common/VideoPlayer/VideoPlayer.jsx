import { Box, Container, Typography } from "@mui/material";
import React from "react";

function VideoPlayer({ embeddedYoutubeUrl, title, description }) {
  return (
    <Container>
      <Box>
        <iframe
          src={embeddedYoutubeUrl}
          title={title}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ border: "none", width: "50rem", height: "30rem" }}
        />
      </Box>
      <Box>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle2">{description ? description : "No description given"}</Typography>
      </Box>
    </Container>
  );
}

export default VideoPlayer;
