import { Avatar, Box, Stack, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import React from "react";

function CommentBubble({ comment }) {
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={2} mb={2}>
      <Avatar alt={comment.username} src="https://akcdn.detik.net.id/community/media/visual/2023/08/07/lionel-messi_169.jpeg?w=600&q=90" />
      <Box>
        <Typography variant="body1" color={green[500]}>
          {comment.username}
        </Typography>
        <Typography variant="body2" color={grey[400]}>
          {comment.comment}
        </Typography>
      </Box>
    </Stack>
  );
}

export default CommentBubble;
