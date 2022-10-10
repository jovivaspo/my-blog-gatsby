/*MODULES*/
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
/*COMPONENTS*/
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
/*CSS*/
import "../assets/css/postTemplate.css";

const postTemplate = ({ data }) => {
  console.log("DATA", data);
};

export default postTemplate;

export const query = graphql`
  query getAPost($title: String) {
    allStrapiPost(filter: { title: { eq: $title } }) {
      edges {
        node {
          title
        }
      }
    }
  }
`;
