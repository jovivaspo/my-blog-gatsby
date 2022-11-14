import React from "react";

const ItemTableContent = ({ block, index }) => {
  const ref = React.useRef();

  return (
    <li
      ref={ref}
      key={index}
      dangerouslySetInnerHTML={{
        __html:
          block.body.data.childMarkdownRemark.tableOfContents.match(
            /<a(.*?)<\/a>/
          )[0],
      }}
    ></li>
  );
};

export default ItemTableContent;
