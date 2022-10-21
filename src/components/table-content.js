import React from "react";
import "../assets/css/sidebar.css";

const TableContent = ({ blocks }) => {
  return (
    <aside className=" sidebar table-content">
      <h3>Table of Contents</h3>
      {blocks.map((block, index) => {
        if (
          block.strapi_component === "shared.rich-text" &&
          block.body.data.childMarkdownRemark.tableOfContents.length > 0
        ) {
          return (
            <li
              dangerouslySetInnerHTML={{
                __html:
                  block.body.data.childMarkdownRemark.tableOfContents.match(
                    /<a(.*?)<\/a>/
                  )[0],
              }}
            ></li>
          );
        }
      })}
    </aside>
  );
};

export default TableContent;
