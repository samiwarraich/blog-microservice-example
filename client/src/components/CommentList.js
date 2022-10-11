import React from "react";

function CommentList({ comments }) {
  const renderedComment = comments.map((comment) => {
    let content =
      comment.status === "pending"
        ? "This comment is awaiting moderation"
        : comment.status === "rejected"
        ? "This comment has been rejected"
        : comment.content;

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComment}</ul>;
}

export default CommentList;
