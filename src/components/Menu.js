/*MODULES*/
import React from "react"
/*COMPONENTS*/
import { Link } from "gatsby"
/*CSS*/
import "../assets/css/menu.css"

const munuItems = ["home", "about", "contact"]

const Menu = React.forwardRef((props, ref) => {
  const { isActive } = props

  React.useEffect(() => {
    isActive
      ? ref.current.classList.add("active")
      : ref.current.classList.remove("active")
  }, [isActive])

  return (
    <nav className="menu-container" ref={ref}>
      {munuItems.map((el, index) => {
        return (
          <ul key={index}>
            <li>
              <Link to={el === "home" ? "/" : `/${el}`}>{el}</Link>
            </li>
          </ul>
        )
      })}
    </nav>
  )
})

export default Menu
