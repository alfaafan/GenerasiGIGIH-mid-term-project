import React from "react";
import CommentBubble from "../CommentBubble/CommentBubble";

function CommentList({ commentList }) {
  return (
    <>
      {commentList.map((comment, index) => (
        <CommentBubble key={index} comment={comment} />
      ))}
    </>
  );
}

export default CommentList;
