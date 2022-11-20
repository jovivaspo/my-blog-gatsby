import React from "react";
import "../assets/css/sidebar.css";
import ItemTableContent from "./item-table-content";

const TableContent = ({ blocks }) => {
  const tableRef = React.useRef();
  const [heading, setHeading] = React.useState([]);
  const [elementsTable, setElementsTable] = React.useState([]);
  const [firstVisible, setFirstVisible] = React.useState(null);
  const [hightScroll, setHightScroll] = React.useState(0);

  React.useEffect(() => {
    const elements = document.querySelectorAll("h2");
    setHeading(Array.from(elements));
  }, []);

  React.useEffect(() => {
    const handlerScroll = () => {
      const elementsVisibles = document.querySelectorAll(
        ".sidebar .isIntersecting"
      );

      if (elementsVisibles.length > 0 && firstVisible === null)
        return setFirstVisible({ element: elementsVisibles[0], index: 0 });

      if (
        elementsVisibles.length > 0 &&
        elementsVisibles[0] !== firstVisible.element
      ) {
        setFirstVisible({
          element: elementsVisibles[0],
          index: elementsTable.indexOf(elementsVisibles[0]),
        });
      }
    };
    window.addEventListener("scroll", handlerScroll);
    return () => window.removeEventListener("scroll", handlerScroll);
  }, [heading]);

  React.useEffect(() => {
    if (firstVisible) {
      const allElements = document.querySelectorAll(".table-content li");
      setElementsTable(Array.from(allElements));
    }
  }, [firstVisible]);

  console.log(elementsTable);
  console.log(firstVisible?.element, firstVisible?.index);

  React.useEffect(() => {
    console.log("miau");
    if (tableRef.current.scrollHeight > 424 && firstVisible) {
      const hightTitle = firstVisible.element.getBoundingClientRect().height;
      const hight = hightTitle * firstVisible.index;
      console.log(hightTitle, hight);

      if (hight !== hightScroll) {
        console.log("Bajando");
        setHightScroll(hight);
        tableRef.current.scroll({
          top: hight,
          behavior: "smooth",
        });
      }
    }
  }, [tableRef.current, firstVisible]);

  return (
    <aside className="sidebar">
      <h3>Table of Contents</h3>
      <div className="table-content" ref={tableRef}>
        {heading &&
          blocks.map((block, index) => {
            if (
              block.strapi_component === "shared.rich-text" &&
              block.body.data.childMarkdownRemark.tableOfContents.length > 0 &&
              !block.body.data.childMarkdownRemark.html.includes("<h3")
            ) {
              return (
                <ItemTableContent block={block} key={index} heading={heading} />
              );
            }
          })}
      </div>
    </aside>
  );
};

export default TableContent;
