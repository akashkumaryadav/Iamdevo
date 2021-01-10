import React from "react"
import Image from "gatsby-image"

const PostPreview = ({ post }) => {
  const tags = post.tags.split(",")
  tags.splice(0, tags.length / 2)
  return (
    <div
      className={`max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl`}
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-full w-full object-cover md:w-48"
            fluid={post.image.fluid}
            // src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
            alt="Man looking at item at a store"
            key={post.slug}
          />
          {/* <img
            className="h-48 w-full object-cover md:w-48"
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
            alt="Man looking at item at a store"
          /> */}
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-danger font-semibold">
            {post.title}
          </div>
          <a
            href="#"
            className=" mt-1 text-sm flex flex-wrap leading-tight font-medium text-primary space-x-1 space-y-1"
          >
            {tags.map((tag, index) => (
              <p
                key={index}
                className="text-smblack bg-warning p-1 rounded-xl  hover:underline"
              >
                #{tag}
              </p>
            ))}{" "}
          </a>
          <p className="mt-2 text-gray-500">{post.excerpt}</p>
        </div>
      </div>
    </div>
  )
}

export default PostPreview
