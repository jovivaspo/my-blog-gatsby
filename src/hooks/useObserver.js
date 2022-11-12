/*MODULES*/
import React from "react";
import { useEffect } from "react";

const useObserver = (target, options) => {
  const [isIntersection, setIstersectiong] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIstersectiong(entry);
      },
      [options]
    );

    if (target.current) observer.observe(target.current);
    return () => {
      if (target.current) observer.unobserve(target.current);
    };
  }, [target]);

  return isIntersection;
};

export { useObserver };
