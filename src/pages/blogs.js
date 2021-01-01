import React from "react"
import PostPreview from "../components/postPreview"
import usePostsdata from "../hooks/usePostsdata"
import Layout from "../components/layout"
import Search from "../components/search"
import { useState } from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import Hero from "../components/hero"

const Blogs = () => {
  const posts = usePostsdata()
  const [filterdpost, setfilterdpost] = useState(undefined)

  return (
    <Layout>
      <Hero />

      {posts.map((post, index) => {
        return (
          <PostPreview
            key={index + Math.random()}
            post={post}
            imgIndex={index}
          />
        )
      })}
    </Layout>
  )
}

export default Blogs
