import React from "react";
import "../assets/css/sidebar.css";
import ItemTableContent from "./item-table-content";

const TableContent = ({ blocks }) => {
  const [titleVisible, setTitleVisible] = React.useState();
  const [heading, setHeading] = React.useState([]);

  React.useEffect(() => {
    const elements = document.querySelectorAll("h2");
    setHeading(elements);
    setTitleVisible(elements[0]);
  }, []);

  React.useEffect(() => {
    console.log("miau");
    const handlerObserver = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        console.log(entry.target, entry.intersectionRatio);
      }
    };

    const observer = new IntersectionObserver(handlerObserver, {
      rootMargin: "-100px 0% -50% 0px",
    });

    if (heading.length > 0) {
      heading.forEach((el) => observer.observe(el));

      return () => observer.current?.disconnect();
    }
  }, [heading]);

  return (
    <aside className=" sidebar table-content">
      <h3>Table of Contents</h3>
      {blocks.map((block, index) => {
        if (
          block.strapi_component === "shared.rich-text" &&
          block.body.data.childMarkdownRemark.tableOfContents.length > 0
        ) {
          return <ItemTableContent block={block} key={index} />;
        }
      })}
    </aside>
  );
};

export default TableContent;
