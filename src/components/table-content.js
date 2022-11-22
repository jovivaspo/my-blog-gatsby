import React from "react";
import "../assets/css/sidebar.css";
import { useObserver } from "../hooks/useObserver";
import ItemTableContent from "./item-table-content";

const TableContent = ({ blocks }) => {
  const tableRef = React.useRef();
  const [titles, setTitles] = React.useState([]);
  const [headings, setHeadings] = React.useState([]);
  const [height, setHeight] = React.useState([]);

  React.useEffect(() => {
    setHeadings(document.querySelectorAll("h2"));
  }, []);

  React.useEffect(() => {
    setTitles(
      blocks
        .map((block) => {
          if (
            block.strapi_component === "shared.rich-text" &&
            block.body.data.childMarkdownRemark.tableOfContents.length > 0 &&
            !block.body.data.childMarkdownRemark.html.includes("<h3")
          ) {
            return block.body.data.childMarkdownRemark.tableOfContents.match(
              /<a(.*?)<\/a>/
            )[0];
          }
        })
        .filter((block) => block !== undefined)
    );
  }, []);

  const headingsActive = useObserver(headings);

  React.useEffect(() => {
    const event = document.event;
    console.log(event);
    if (tableRef.current.scrollHeight > 400) {
      const index = Math.min(
        ...headingsActive.map((el) => {
          return Array.from(headings).indexOf(el);
        })
      );
      if (tableRef.current.childNodes.length > 0 && index !== Infinity) {
        let scrollHeight = 0;
        for (let i = 0; i <= index - 1; i++) {
          scrollHeight +=
            tableRef.current.childNodes[i].getBoundingClientRect().height;
        }
        setHeight(scrollHeight);
      }
    }
  }, [tableRef.current, headingsActive]);

  React.useEffect(() => {
    tableRef.current.scrollTop = height;
  }, [height]);

  return (
    <aside className="sidebar">
      <h3>Table of Contents</h3>
      <div className="table-content" ref={tableRef}>
        {titles?.map((title, index) => (
          <ItemTableContent
            title={title}
            key={index}
            headingsActive={headingsActive}
          />
        ))}
      </div>
    </aside>
  );
};

export default TableContent;
