import { graphql, useStaticQuery } from "gatsby"

const usePostsdata = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlog {
        edges {
          node {
            title
            slug
            tags
            description {
              childMdx {
                excerpt
              }
            }
            blogImage {
              fluid {
                srcWebp
              }
            }
          }
        }
      }
    }
  `)

  return data.allContentfulBlog.edges.map(post => ({
    title: post.node.title,
    slug: post.node.slug,
    excerpt: post.node.description.childMdx.excerpt,
    image: post.node.blogImage,
    tags: post.node.tags,
  }))
}

export default usePostsdata
