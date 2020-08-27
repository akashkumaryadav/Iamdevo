import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import AnyLink from "gatsby-plugin-transition-link/AniLink"
import { Mdxlayout } from "../components/Mdxlayout"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`
const Post = ({ data }) => {
  return (
    <Layout>
      <Mdxlayout>
        <h1 className="text-xl p-2 font-bold font-mono">
          {data.mdx.frontmatter.title}
        </h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <Link
          className="bg-blue-900 py-1 px-2 
        text-center
        text-white
        rounded-sm
        no-underline"
          cover
          direction="right"
          to="/"
        >
          &larr; Home
        </Link>
      </Mdxlayout>
    </Layout>
  )
}
export default Post
