import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

const PostPreview = ({ post }) => {
  let tags = post.tags.split(",")
  tags = tags.splice(0, 2)
  return (
    <div
      className={`max-w-md mx-auto bg-primary rounded-xl shadow-md overflow-hidden md:max-w-2xl`}
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            fadeIn
            className="h-full w-full object-cover md:w-48"
            fluid={post.image.fluid}
            alt="Man looking at item at a store"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-danger font-semibold">
            <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
          </div>
          <button
            href="#"
            className=" mt-1 text-sm flex flex-wrap leading-tight font-medium text-primary space-x-1 space-y-1 "
          >
            {tags.map((tag, index) => (
              <p
                key={index}
                className="text-smblack bg-warning p-1 rounded-xl  hover:underline"
              >
                #{tag}
              </p>
            ))}{" "}
          </button>
          <p className="mt-2 text-primaryText">{post.excerpt}</p>
        </div>
      </div>
    </div>
  )
}

export default PostPreview
