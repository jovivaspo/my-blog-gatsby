/*MODULES*/
import React from "react";
/*COMPONENTS*/
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Header from "../components/header";
import BlockRender from "../components/block-render";
/*CSS*/
import "../assets/css/post-template.css";
import TableContent from "../components/table-content";
import LastPosts from "../components/last-posts";

const postTemplate = ({ data }) => {
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
        author={author}
        publishedAt={publishedAt}
      />
      <div className="full-content">
        <section>
          <BlockRender blocks={blocks} />
          <LastPosts />
        </section>
        <TableContent blocks={blocks} />
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
              gatsbyImageData(width: 1200, height: 600, layout: CONSTRAINED)
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
                  tableOfContents
                }
              }
            }
          }
        }
      }
    }
  }
`;
