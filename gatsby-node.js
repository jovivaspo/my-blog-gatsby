const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query MyPostQuery {
      allStrapiPost {
        nodes {
          title
        }
      }
    }
  `);

  result.data.allStrapiPost.nodes.forEach((post) => {
    createPage({
      path: post.title,
      component: path.resolve("src/templates/postTemplate.js"),
      context: {
        title: post.title,
      },
    });
  });
};
