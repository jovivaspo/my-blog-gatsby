import React from "react";

const ItemTableContent = ({ title, index, headingsActive }) => {
  const [isIntersection, setIstersectiong] = React.useState(false);
  const ref = React.useRef();
  React.useEffect(() => {
    headingsActive.map((el) => el.innerText).includes(ref.current.innerText)
      ? setIstersectiong(true)
      : setIstersectiong(false);
  }, [ref.current, headingsActive]);

  return (
    <li
      ref={ref}
      key={index}
      dangerouslySetInnerHTML={{
        __html: title,
      }}
      className={isIntersection && "isIntersecting"}
    ></li>
  );
};

export default ItemTableContent;
