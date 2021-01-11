import React from "react"
import PostPreview from "../components/PostPreview"
import usePostsdata from "../hooks/usePostsdata"
import { FadeIn } from "../utils/GsapAnimations"

const Blogs = () => {
  const posts = usePostsdata()
  return (
    <div className="container box-border mx-auto p-5 mt-5 bg-primary">
      <h1 className="text-3xl md:text-4xl lg:text-5xl m-5">Recent Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ">
        {posts.map((post, index) => (
          <FadeIn key={index}>
            <div key={index}>
              <PostPreview post={post} />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

export default Blogs
