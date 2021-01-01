import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Image from "gatsby-image"
import AnyLink from "gatsby-plugin-transition-link/AniLink"
import { useRef } from "react"
import quotes from "./quotes"

const PostPreview = props => {
  const { title, author, excerpt, slug, image } = props.post
  const date = new Date(Date.now()).toDateString()
  return (
    <article>
      <div className="lg:max-w-screen-xl  bg-gray-100 rounded-xl mx-10 shadow-md overflow-hidden md:max-w-2xl mb-20 lg:mx-20   transform -translate-y-56">
        <div
          className={`md:flex ${
            props.imgIndex / 2 === 0 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="md:flex-shrink-0">
            <img
              className="h-full w-full object-cover md:max-w-md"
              src={image.fluid.srcWebp}
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-16">
            <div className="flex justify-between mb-8">
              <span>{date}</span>
              <i className="fas fa-heart text-red-600"></i>
            </div>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-5">
              {author}
            </div>
            <a
              href="#"
              className="block mt-1 text-2xl font-medium leading-tight text-black hover:underline mb-5"
            >
              {title}
            </a>
            <p className="mt-2 text-lg italic text-gray-600 mb-8">{excerpt}</p>
            <div className="flex  text-xl text-gray-500">
              <span className="mr-10  hover:text-blue-800">
                continue reading{" "}
                <i className="fas fa-ellipsis-h align-bottom"></i>
              </span>
              <span className=" hover:text-blue-400">
                comments <i className="fas fa-comment-alt"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      {props.imgIndex / 2 === 0 && (
        <blockquote className="lg:max-w-screen-xl  bg-gray-100 rounded-xl mx-10 shadow-md overflow-hidden md:max-w-2xl mb-20 lg:mx-20   transform -translate-y-56 flex flex-col justify-center h-64">
          <h1 className="text-center lg:text-3xl text-xl text-gray-700">
            <i className="fas fa-quote-left"></i>
            <p>
              {
                quotes[Math.floor(Math.random() * (quotes.length - 0) + 0)]
                  .quote
              }
            </p>
            <span className="text-gray-600">
              ~
              {
                quotes[Math.floor(Math.random() * (quotes.length - 0) + 0)]
                  .author
              }
            </span>
          </h1>
        </blockquote>
      )}
    </article>
  )
}
export default PostPreview
