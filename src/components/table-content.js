import React from "react";
import "../assets/css/sidebar.css";
import { useObserver } from "../hooks/useObserver";
import ItemTableContent from "./item-table-content";

const TableContent = ({ blocks }) => {
  const tableRef = React.useRef();
  const [titles, setTitles] = React.useState([]);
  const [headings, setHeadings] = React.useState([]);
  const [height, setHeight] = React.useState([]);
  const [clickInLink, setClickInLink] = React.useState({
    click: false,
    element: null,
  });

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

  const headingsActive = useObserver(headings, clickInLink);

  React.useEffect(() => {
    if (tableRef.current.scrollHeight > 400 && !clickInLink) {
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

  React.useEffect(() => {
    if (clickInLink?.click) {
      const heightWindow = window.screen.availHeight;
      const heightElement = clickInLink.element.getBoundingClientRect().height;
      console.log(clickInLink.element);
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          console.log("visible: ", entry.isIntersecting);
          if (entry.isIntersecting)
            setClickInLink({ click: false, element: null });
        },
        {
          root: null,
          rootMargin: `-80px 0px -${heightWindow - 80 + heightElement}px 0px`,
          threshold: 1,
        }
      );
      observer.observe(clickInLink.element);
      return () => observer.unobserve(clickInLink.element);
    }
  }, [clickInLink]);

  /*React.useEffect(() => {
    console.log("holi");
    const handler = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;

          console.log("Es visible??", entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: `-80px 0px -750px 0px`,
          threshold: 1,
        }
      );
      const el = document.querySelector(
        "#there-are-19-signs-that-he-just-wants-to-sleep-with-you"
      );
      observer.observe(el);
      return () => observer.disconnect(el);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [headingsActive]); */

  /* React.useEffect(() => {
    if (clickInLink) {
      const heightWindow = window.innerHeight;
      const heightElement = clickInLink.getBoundingClientRect().height;

      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          console.log(entry);
          console.log(entry.isIntersecting);
          if (entry.isIntersecting) setClickInLink(null);
        },
        {
          rootMargin: `-80px 0px -${
            heightWindow - 100 - heightElement * 2
          }px 0px`,
          threshold: 1,
        }
      );
      observer.observe(clickInLink);
    
    }
  }, [clickInLink]);
  */
  const handlerClick = (e) => {
    if (e.target.matches("li")) {
      return false;
    }

    const contentElement = e.target.innerText;

    const [element] = Array.from(headings).filter(
      (el) => el.innerText === contentElement
    );

    setClickInLink({ click: true, element });
  };

  console.log(clickInLink);

  return (
    <aside className="sidebar">
      <h3>Table of Contents</h3>
      <div className="table-content" ref={tableRef}>
        {titles?.map((title, index) => (
          <ItemTableContent
            title={title}
            key={index}
            headingsActive={headingsActive}
            handlerClick={handlerClick}
          />
        ))}
      </div>
    </aside>
  );
};

export default TableContent;

//
