/*MODULES*/
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import React from "react";
/*CSS*/
import "../assets/css/item-sidebar.css";

const ItemSidebar = ({ post }) => {
  const imageToRender = getImage(
    post.thumbnail.localFile.childImageSharp.gatsbyImageData
  );
  return (
    <div className="item-sidebar">
      <Link to={`/${post.slug}`}>
        <GatsbyImage
          class="image-item-sidebar"
          image={imageToRender}
          alt={post.thumbnail.alternativeText}
        />
        <div className="container-text">
          <h4>{post.title}</h4>
          <span className="date-ago"> Published {post.publishedAt}</span>
        </div>
      </Link>
    </div>
  );
};

export default ItemSidebar;
