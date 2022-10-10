/*MODULES*/
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import React from "react"
/*CSS*/
import "../assets/css/itemSidebar.css"

const ItemSidebar = ({ post }) => {
  const imageToRender = getImage(post.image)
  return (
    <div className="item-sidebar">
      <Link to={`/${post.slug}`}>
        <GatsbyImage image={imageToRender} />
        <h4>{post.title}</h4>
      </Link>
    </div>
  )
}

export default ItemSidebar
