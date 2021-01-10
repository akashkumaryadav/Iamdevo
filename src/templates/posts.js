import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import AnyLink from "gatsby-plugin-transition-link/AniLink"
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
        <h1 className="text-xl p-2 font-bold font-mono">
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
          className="bg-warning  py-2  px-4 
        text-center
        text-primary
        rounded-full
        no-underline mt-4"
          cover
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
