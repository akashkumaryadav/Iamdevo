exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Failed to create a page", result.errors)
  }
  const posts = result.data.allContentfulBlog.edges
  posts.forEach(post => {
    actions.createPage({
      path: `/blogs/${post.node.slug}`,
      component: require.resolve("./src/templates/posts.js"),
      context: {
        slug: post.node.slug,
      },
    })
  })
}
