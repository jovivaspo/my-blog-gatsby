/*MODULES*/
import React from "react";
import { useEffect } from "react";

const useObserver = (target) => {
  console.log(target);
  const [isIntersection, setIstersectiong] = React.useState(false);

  useEffect(() => {
    const handlerObserver = (entries) => {
      const [entry] = entries;
      console.log(entry.isIntersecting);
      setIstersectiong(entry.isIntersecting);
    };
    const observer = new IntersectionObserver(handlerObserver, options);

    if (target.current) observer.observe(target.current);
    return () => {
      if (target.current) observer.unobserve(target.current);
    };
  }, [target]);

  return isIntersection;
};

export { useObserver };
