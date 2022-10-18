import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "../assets/css/sidebar.css";
import ItemSidebar from "./item-sidebar";

const Sidebar = () => {
  const result = useStaticQuery(query);
  console.log(result);
  const lastPosts = result.allStrapiArticle.nodes;

  return (
    <div className="sidebar">
      <h3>Last Posts</h3>
      {lastPosts.map((post, index) => {
        return <ItemSidebar post={post} key={index} />;
      })}
    </div>
  );
};

export default Sidebar;

const query = graphql`
  query lastPost {
    allStrapiArticle(limit: 10, sort: { order: DESC, fields: createdAt }) {
      nodes {
        title
        slug
        publishedAt(fromNow: true)
        thumbnail {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 350, height: 180)
            }
          }
        }
      }
    }
  }
`;
