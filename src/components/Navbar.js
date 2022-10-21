/*MODULES*/
import React from "react";

/*COMPONENTS*/
import Logo from "./logo";
import Menu from "./menu";
import MenuIcon from "./menu-icon";

/*CSS*/
import "../assets/css/navbar.css";
import { useMenu } from "../hooks/useMenu";
import BottomThemeToggle from "./bottom-theme-toggle";

const Navbar = () => {
  const { isActive, handlerActive } = useMenu();
  const menuRef = React.useRef(null);
  const iconRef = React.useRef(null);

  React.useEffect(() => {
    const handler = (e) => {
      if (
        isActive &&
        !menuRef.current.contains(e.target) &&
        !iconRef.current.contains(e.target)
      ) {
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
        <BottomThemeToggle />
        <Menu isActive={isActive} ref={menuRef} />
        <MenuIcon
          ref={iconRef}
          color="#fff"
          handlerActive={handlerActive}
          isActive={isActive}
        />
      </div>
    </nav>
  );
};

export default Navbar;
