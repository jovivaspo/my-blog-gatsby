import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "../assets/css/sidebar.css";
import ItemSidebar from "./ItemSidebar";

const Sidebar = () => {
  /* const result = useStaticQuery(query);
  console.log(result);
  const lastPosts = result.allContentfulPost.nodes;

  return (
    <div className="sidebar">
      <h3>Últimos posts</h3>
      {lastPosts.map((post, index) => {
        return <ItemSidebar post={post} key={index} />;
      })}
    </div>
  );
  */
};

export default Sidebar;

/*
const query = graphql`
  query lastPost {
    allContentfulPost(limit: 10, sort: { order: DESC, fields: createdAt }) {
      nodes {
        title
        slug
        createdAt(fromNow: true)
        image {
          gatsbyImageData(layout: CONSTRAINED, width: 350, height: 180)
        }
      }
    }
  }
`
*/
