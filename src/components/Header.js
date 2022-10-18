/*MODULES*/
import React from "react";
/*COMPONENTS*/
import Title from "./title";
import Tag from "./tag";
import MainImage from "./main-image";
/*CSS*/
import "../assets/css/header.css";

const Header = ({ title, image, tags }) => {
  return (
    <header className="header">
      <div className="content-main-image">
        {" "}
        <div className="gradient-image"></div>
        <MainImage image={image} />
      </div>
      <div className="header-content">
        {tags.name ? (
          <Tag tag={tags} />
        ) : (
          tags.map((tag, index) => {
            return <Tag tag={tag} key={index} />;
          })
        )}
        <Title title={title} />
      </div>
    </header>
  );
};

export default Header;
