/*MODULES*/
import React from "react"
/*COMPONENTS*/
import Title from "./Title"
import Tag from "./Tag"
import MainImage from "./MainImage"
/*CSS*/
import "../assets/css/header.css"

const Header = ({ title, img, description, tag }) => {
  return (
    <header className="header">
      <div className="content-main-image">
        {" "}
        <div className="gradient-image"></div>
        <MainImage img={img} alt={description} />
      </div>
      <div className="header-content">
        {tag && <Tag tag={tag} />}
        <Title title={title} />
      </div>
    </header>
  )
}

export default Header
