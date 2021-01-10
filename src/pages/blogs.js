import React from "react"
import PostPreview from "../components/PostPreview"
import usePostsdata from "../hooks/usePostsdata"
import Typewriter from "typewriter-effect"
import { FadeIn } from "../utils/GsapAnimations"

const Blogs = () => {
  const posts = usePostsdata()

  return (
    <>
      <div className="container box-border mx-auto p-5 mt-5 bg-primary">
        <h1 className="text-3xl md:text-5xl lg:text-6xl m-5">
          <Typewriter
            options={{
              strings: ["Recent Posts"],
              autoStart: true,
              loop: true,
              delay: 5,
              pause: 1500,
            }}
          ></Typewriter>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {posts.map((post, index) => (
            <FadeIn key={index}>
              <div key={index}>
                <PostPreview post={post} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  )
}

export default Blogs
