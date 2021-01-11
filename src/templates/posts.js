import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/layout"
import { Mdxlayout } from "../components/Mdxlayout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      childContentfulBlogDescriptionTextNode {
        childMdx {
          body
        }
      }
    }
  }
`
const Post = ({ data }) => {
  return (
    <Layout>
      <Mdxlayout>
        <h1 className="text-xl pt-28 font-bold font-mono">
          {data.contentfulBlog.title}
        </h1>
        <MDXRenderer>
          {
            data.contentfulBlog.childContentfulBlogDescriptionTextNode.childMdx
              .body
          }
        </MDXRenderer>
      </Mdxlayout>
      <div className="container p-8 mx-auto">
        <Link
          className="bg-warning  py-2  px-4 text-center text-primaryrounded-full no-underline mt-4"
          direction="right"
          to="/"
        >
          &larr; Home
        </Link>
      </div>
    </Layout>
  )
}
export default Post
