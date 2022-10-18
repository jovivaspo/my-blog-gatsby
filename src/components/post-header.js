/*MODULES*/
import React from "react";
import getDate from "../services/get-date";
/*CSS*/
import "../assets/css/post-header.css";

const PostHeader = ({ author, publishedAt }) => {
  return (
    <div className="post-header">
      <span className="author">By {author.name}</span>
      <span>/</span>
      <span className="date">{getDate(publishedAt)}</span>
    </div>
  );
};

export default PostHeader;
