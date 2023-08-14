import React, { useEffect, useState } from "react";
import CommentBubble from "../CommentBubble/CommentBubble";
import { useLoading } from "../../../hooks/useLoading";
import { useCommentList } from "../../../hooks/useCommentList";
import { useParams } from "react-router-dom";

// const data = [
//   {
//     username: "Messi",
//     comment: "Artinya apa bang messi?",
//   },
//   {
//     username: "Ronaldo",
//     comment: "SIIUUUU",
//   },
//   {
//     username: "Neymar",
//     comment: "gajelas lu",
//   },
//   {
//     username: "Neymar",
//     comment: "gajelas lu",
//   },
//   {
//     username: "Neymar",
//     comment: "gajelas lu",
//   },
//   {
//     username: "Neymar",
//     comment: "gajelas lu",
//   },
//   {
//     username: "Neymar",
//     comment: "gajelas lu",
//   },
//   {
//     username: "Neymar",
//     comment: "aksjdkasjdhakjsdhkasjdhkasjhdkashdkjas hasdhkasjdhaskj dhkasjdh aksjhaskjdhaksjhask jhs djh",
//   },
// ];

function CommentList() {
  const { videoId } = useParams();
  // const [comments, setComments] = useState([]);

  // const getComment = () => {
  //   setComments(data);
  // };

  // useEffect(() => {
  //   getComment();
  // }, []);

  const { commentList } = useCommentList(videoId);

  return (
    <>
      {commentList.map((comment, index) => (
        <CommentBubble key={index} comment={comment} />
      ))}
    </>
  );
}

export default CommentList;
