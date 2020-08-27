import React from "react"
import PostPreview from "../components/postPreview"
import usePostsdata from "../hooks/usePostsdata"
import Layout from "../components/layout"

const Blogs = () => {
  const posts = usePostsdata()
  return (
    <Layout>
      {posts.map((post, index) => (
        <PostPreview post={post} key={post.slug + index} />
      ))}
    </Layout>
  )
}

export default Blogs
