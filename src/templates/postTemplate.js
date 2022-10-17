/*MODULES*/
import React from "react";
/*COMPONENTS*/
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BlockRender from "../components/BlockRender";
/*CSS*/
import "../assets/css/postTemplate.css";

const postTemplate = ({ data }) => {
  console.log("DATA", data.allStrapiArticle.nodes[0]);
  const { blocks, title, description, thumbnail, category } =
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
        <section>
          <BlockRender blocks={blocks} />
        </section>
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
        blocks {
          ... on STRAPI__COMPONENT_SHARED_MEDIA {
            strapi_component
            image {
              alternativeText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 600, height: 480, layout: CONSTRAINED)
                }
              }
            }
          }
          ... on STRAPI__COMPONENT_SHARED_RICH_TEXT {
            strapi_component
            body {
              data {
                body
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    }
  }
`;
