import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import AnyLink from "gatsby-plugin-transition-link/AniLink"

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
      <h1
        css={css`
          line-height: 2rem;
        `}
      >
        {data.mdx.frontmatter.title}
      </h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        postBy: {data.mdx.frontmatter.author}
      </p>
      <MDXRenderer
        css={css`
          text-align: justify;
        `}
      >
        {data.mdx.body}
      </MDXRenderer>
      <AnyLink cover direction="right" to="/">
        &larr; Home
      </AnyLink>
    </Layout>
  )
}
export default Post
