import React from "react";

const options = {
  rootMargin: "-80px 0px -200px 0px",
  threshold: 1,
};

const ItemTableContent = ({ block, index, heading }) => {
  const ref = React.useRef();
  const [title, setTitle] = React.useState();
  const [isIntersection, setIstersectiong] = React.useState(false);

  React.useEffect(() => {
    const element = heading.filter(
      (el) => el.innerText === ref.current?.innerText
    );
    setTitle(element[0]);
  }, [ref.current]);

  React.useEffect(() => {
    const handlerObserver = (entries) => {
      const [entry] = entries;
      setIstersectiong(entry.isIntersecting);
    };
    const observer = new IntersectionObserver(handlerObserver, options);

    if (title) observer.observe(title);
    return () => {
      if (title) observer.unobserve(title);
    };
  }, [title]);

  React.useEffect(() => {
    isIntersection
      ? ref.current.classList.add("isIntersecting")
      : ref.current.classList.remove("isIntersecting");
  }, [isIntersection]);

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
