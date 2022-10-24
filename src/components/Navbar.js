/*MODULES*/
import React, { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

/*COMPONENTS*/
import Logo from "./logo";
import Menu from "./menu";
import MenuIcon from "./menu-icon";

/*CSS*/
import "../assets/css/navbar.css";
import { useMenu } from "../hooks/useMenu";

const Navbar = () => {
  const { theme, handlerTheme } = useContext(ThemeContext);
  const { isActive, handlerActive } = useMenu();
  const menuRef = React.useRef(null);
  const iconRef = React.useRef(null);

  React.useEffect(() => {
    const handler = (e) => {
      if (isActive && !iconRef.current.contains(e.target)) {
        handlerActive();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isActive]);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Logo />
        <Menu
          isActive={isActive}
          ref={menuRef}
          theme={theme}
          handlerTheme={handlerTheme}
        />
        <MenuIcon
          ref={iconRef}
          color={theme === "dark" ? "#ddd" : "#222"}
          handlerActive={handlerActive}
          isActive={isActive}
        />
      </div>
    </nav>
  );
};

export default Navbar;
