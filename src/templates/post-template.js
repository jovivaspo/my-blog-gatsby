/*MODULES*/
import React from "react";
/*COMPONENTS*/
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import BlockRender from "../components/block-render";
/*CSS*/
import "../assets/css/post-template.css";
import PostHeader from "../components/post-header";

const postTemplate = ({ data }) => {
  console.log("DATA", data.allStrapiArticle.nodes[0]);
  const {
    blocks,
    title,
    description,
    thumbnail,
    category,
    author,
    publishedAt,
  } = data.allStrapiArticle.nodes[0];

  return (
    <Layout>
      <Header
        title={title}
        description={description}
        image={thumbnail}
        tags={category}
      />
      <PostHeader author={author} publishedAt={publishedAt} />
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
        publishedAt(fromNow: false)
        blocks {
          ... on STRAPI__COMPONENT_SHARED_MEDIA {
            strapi_component
            image {
              alternativeText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 600, height: 400, layout: CONSTRAINED)
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
