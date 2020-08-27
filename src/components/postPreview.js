import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Image from "gatsby-image"
import AnyLink from "gatsby-plugin-transition-link/AniLink"

const PostPreview = ({ post }) => {
  const { title, author, excerpt, slug, image } = post
  console.log(image)
  return (
    <article className="flex-col justify-between m-5 shadow-lg rounded-sm p-4 space-y-2">
      <h1 className="text-xl font-bold">{title}</h1>
      <Image
        css={css`
          width: 100%;
          height: 325px;
          margin: auto;
        `}
        Tag="section"
        fluid={image.sharp.fluid}
        fadeIn={true}
      />
      <p className="pb-2">{excerpt}</p>
      <Link
        className="text-white no-underline bg-blue-900 rounded-md py-1 px-2 "
        to={`/${slug}`}
      >
        Read More
      </Link>
    </article>
  )
}
export default PostPreview
