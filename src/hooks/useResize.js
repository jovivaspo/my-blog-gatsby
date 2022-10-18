import { useEffect, useState } from "react";

const useResize = () => {
  const [size, setSize] = useState("1200");

  const handleResize = () => {
    const width = window.innerWidth;
    setSize(width);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export { useResize };
