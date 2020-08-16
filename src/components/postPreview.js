import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Image from "gatsby-image"
import AnyLink from "gatsby-plugin-transition-link/AniLink"

const PostPreview = ({ post }) => {
  const { title, author, excerpt, slug, image } = post
  return (
    <article
      css={css`
        margin-top: 1.5rem;
        line-height: 1.2;
        border-bottom: 1px solid #ddd;
        padding-bottom: 2rem;
        display: flex;
        &:first-of-type {
          padding-top: 2rem;
        }
        small {
          float: right;
          margin: 0.5rem;
        }
        &:hover {
          transform: scale(1.09, 1.08);
          box-shadow: 1px 0px 20px 10px #eee;
          transition: transform 200ms ease-in;
        }
      `}
    >
      <AnyLink paintDrip hex="#663399" to={slug}>
        <Image
          css={css`
            width: 100px;
            margin: 0;
          `}
          fadeIn
          fluid={image && image.sharp.fluid}
          alt={title}
          key={title}
        />
      </AnyLink>
      <section>
        <h1>{title}</h1>
        <small>~{author}</small>
        <p>{excerpt}</p>
        <AnyLink cover to={slug}>
          Read more.....
        </AnyLink>
      </section>
    </article>
  )
}
export default PostPreview
