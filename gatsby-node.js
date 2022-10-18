const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query MyPostQuery {
      allStrapiArticle {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.allStrapiArticle.nodes.forEach((post) => {
    createPage({
      path: post.slug,
      component: path.resolve("src/templates/post-template.js"),
      context: {
        slug: post.slug,
      },
    });
  });
};
