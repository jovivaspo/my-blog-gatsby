import React from "react";
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(undefined);
  const root = window.document.documentElement;

  useEffect(() => {
    const initialColor = root.classList;
    console.log(initialColor);
    initialColor.value === "dark" ? setTheme("dark") : setTheme("light");
  }, []);

  const handlerTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      root.classList.remove("dark");
    } else {
      setTheme("dark");
      root.classList.add("dark");
    }

    window.localStorage.setItem("color-mode", theme);
  };

  const data = { theme, handlerTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
