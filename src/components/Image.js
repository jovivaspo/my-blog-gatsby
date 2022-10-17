/*MODULES*/
import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
/*COMPONENTS*/

/*CSS*/
import "../assets/css/header.css";

const Image = ({ data }) => {
  return (
    <GatsbyImage
      className="main-image"
      image={getImage(data.image.localFile.childImageSharp.gatsbyImageData)}
      alt={data.alternativeText}
    />
  );
};

export default Image;
