/*MODULES*/
import React from "react";
/*COMPONENTS*/
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
/*CSS*/
import "../assets/css/postTemplate.css";

const postTemplate = ({ data }) => {
  console.log("DATA", data.allStrapiArticle.nodes[0]);
  const { body, title, description, thumbnail, category } =
    data.allStrapiArticle.nodes[0];
  return (
    <Layout>
      <Header
        title={title}
        description={description}
        image={thumbnail}
        tags={category}
      />
      <div className="full-content">
        <section
          dangerouslySetInnerHTML={{
            __html: body.data.childMarkdownRemark.html,
          }}
        ></section>
        <Sidebar />
      </div>
    </Layout>
  );
};

export default postTemplate;

export const query = graphql`
  query getAPost($slug: String) {
    allStrapiArticle(filter: { slug: { eq: $slug } }) {
      nodes {
        author {
          name
        }
        category {
          name
        }
        description
        thumbnail {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        title
        publishedAt(fromNow: true)
        body {
          data {
            body
            childMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
          medias {
            alternativeText
            file {
              alternativeText
            }
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 600, height: 480)
              }
            }
            src
            url
          }
        }
      }
    }
  }
`;
