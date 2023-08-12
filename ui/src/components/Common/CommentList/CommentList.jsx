import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import CommentForm from "../../UI/CommentForm/CommentForm";

const data = [
  {
    username: "Messi",
    comment: "Artinya apa bang messi?",
  },
  {
    username: "Ronaldo",
    comment: "SIIUUUU",
  },
  {
    username: "Neymar",
    comment: "gajelas lu",
  },
  {
    username: "Neymar",
    comment: "gajelas lu",
  },
  {
    username: "Neymar",
    comment: "gajelas lu",
  },
  {
    username: "Neymar",
    comment: "gajelas lu",
  },
  {
    username: "Neymar",
    comment: "gajelas lu",
  },
  {
    username: "Neymar",
    comment: "aksjdkasjdhakjsdhkasjdhkasjhdkashdkjas hasdhkasjdhaskj dhkasjdh aksjhaskjdhaksjhask jhs djh",
  },
];

function CommentList() {
  const [comments, setComments] = useState([]);

  const getComment = () => {
    setComments(data);
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <>
      {comments.map((comment, index) => (
        <Stack key={index} direction={"row"} alignItems={"center"} spacing={2} mb={2}>
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
      ))}
    </>
  );
}

export default CommentList;
