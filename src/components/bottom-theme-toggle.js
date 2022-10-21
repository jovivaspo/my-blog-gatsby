/*MODULES*/
import React, { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
/*COMPONENTS*/
import Sun from "./icons/sun";
import Moon from "./icons/moon";
/*CSS*/
import "../assets/css/bottom-theme-toggle.css";

const BottomThemeToggle = () => {
  const { theme, handlerTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className="container-bottom">
      <bottom className="btn-theme" onClick={handlerTheme}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </bottom>
    </div>
  );
};

export default BottomThemeToggle;
