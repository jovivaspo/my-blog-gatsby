import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const MainImage = ({ img, description }) => {
  return <GatsbyImage className="main-image" image={img} alt={description} />
}

export default MainImage
