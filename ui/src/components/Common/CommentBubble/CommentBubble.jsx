import { Avatar, Box, Stack, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import React from "react";
import { timestampFormatter } from "../../../utils/timestampFormatter";

function CommentBubble({ comment }) {
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={2} mb={2}>
      <Avatar alt={comment.username} src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
      <Box>
        <Typography variant="body1" color={green[500]}>
          {comment.username}
        </Typography>
        <Typography variant="body2" color={grey[400]}>
          {comment.comment}
        </Typography>
        <Typography variant="caption" color={grey[500]}>
          {timestampFormatter(comment.timestamp)}
        </Typography>
      </Box>
    </Stack>
  );
}

export default CommentBubble;
