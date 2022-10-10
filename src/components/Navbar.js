/*MODULES*/
import React from "react"

/*COMPONENTS*/
import Logo from "./Logo"
import Menu from "./Menu"
import MenuIcon from "./MenuIcon"
import { Link } from "gatsby"

/*CSS*/
import "../assets/css/navbar.css"
import { useMenu } from "../hooks/useMenu"

const Navbar = () => {
  const { isActive, handlerActive } = useMenu()
  const menuRef = React.useRef(null)
  const iconRef = React.useRef(null)

  React.useEffect(() => {
    const handler = e => {
      if (
        isActive &&
        !menuRef.current.contains(e.target) &&
        !iconRef.current.contains(e.target)
      ) {
        handlerActive()
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [isActive])

  return (
    <div className="navbar">
      <div className="navbar-content">
        <Logo />
        <Menu isActive={isActive} ref={menuRef} />
        <MenuIcon
          ref={iconRef}
          color="#fff"
          handlerActive={handlerActive}
          isActive={isActive}
        />
      </div>
    </div>
  )
}

export default Navbar
