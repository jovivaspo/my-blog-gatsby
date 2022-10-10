import React from "react"
/*COMPONENTS*/
import MainImage from "./MainImage"
import Title from "./Title"
/*CSS*/
import "../assets/css/headerPost.css"
import Tag from "./Tag"

const HeaderPost = ({ title, img, description, tag }) => {
  return (
    <div className="container-header-post">
      <MainImage img={img} alt={description} />
      <Title title={title} />
      <Tag tag={tag} />
    </div>
  )
}

export default HeaderPost
