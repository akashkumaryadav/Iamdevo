import React from "react"
import { css } from "@emotion/core"
import Hero from "../components/hero"
import Layout from "../components/layout"
import { Link } from "gatsby"
import "../assets/styles/main.css"
import PostPreview from "../components/postPreview"
import usePostdata from "../hooks/usePostsdata"

export default () => {
  // using custom post hook
  const posts = usePostdata()
  return (
    // parent Base component to manage globel styling
    <Layout>
      {/*  iterating over the posts array and rendering out postpreviewcomponent */}
      {posts.map(post => {
        return <PostPreview post={post} />
      })}
    </Layout>
  )
}
