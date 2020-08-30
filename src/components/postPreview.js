import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Image from "gatsby-image"
import AnyLink from "gatsby-plugin-transition-link/AniLink"
import { useRef } from "react"

const PostPreview = props => {
  const { title, author, excerpt, slug, image } = props.post
  const contentToShare = useRef()
  const copyToClipBoard = event => {
    console.log("")
  }
  return (
    <article
      className="flex-col justify-between m-5 shadow-2xl rounded-sm p-5 space-y-2"
      css={css`
        :hover {
          transform: scale(1.04, 1.04);
        }
      `}
    >
      <Link to={`/blogs/${slug}`}>
        <h1 className="text-xl font-bold">{title}</h1>
        {/* <Image
        css={css`
          width: 100%;
          height: 325px;
          margin: auto;
        `}
        Tag="section"
        fluid={image.fluid}

        fadeIn={true}
      /> */}
        <p className="pb-2">{excerpt}</p>
      </Link>
      <section className="flex flex-row text-center text-2xl justify-between">
        <i className="fas fa-heart text-red-800"></i>
        <button
          className="fab fa-creative-commons-share text-blue-800"
          onClick={copyToClipBoard}
        ></button>
      </section>
      <div
        className="hidden"
        useref={contentToShare}
      >{`www.iamdevo.ml/blogs/${slug}`}</div>
    </article>
  )
}
export default PostPreview
