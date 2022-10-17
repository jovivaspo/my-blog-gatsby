import React from "react";

const RichText = ({ data }) => {
  console.log(data);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: data.body.data.childMarkdownRemark.html,
      }}
    />
  );
};

export default RichText;