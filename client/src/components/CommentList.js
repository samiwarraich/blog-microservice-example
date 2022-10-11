import React from "react";

function CommentList({ comments }) {
  const renderedComment = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComment}</ul>;
}

export default CommentList;
