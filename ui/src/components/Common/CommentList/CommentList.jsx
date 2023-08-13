import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import CommentBubble from "../CommentBubble/CommentBubble";

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

  const notify = () => toast("Comment sent");

  return (
    <>
      {comments.map((comment, index) => (
        <CommentBubble key={index} comment={comment} />
      ))}
    </>
  );
}

export default CommentList;
