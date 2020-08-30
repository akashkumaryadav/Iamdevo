import React from "react"
import PostPreview from "../components/postPreview"
import usePostsdata from "../hooks/usePostsdata"
import Layout from "../components/layout"
import Search from "../components/search"
import { useState } from "react"

const Blogs = () => {
  const posts = usePostsdata()
  const [filterdpost, setfilterdpost] = useState(undefined)

  return (
    <Layout>
      <Search posts={posts} filteredpost={setfilterdpost} />
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col">
        {filterdpost !== undefined
          ? filterdpost.map((post, index) => (
              <PostPreview post={post} key={post.slug + index} />
            ))
          : posts.map((post, index) => (
              <PostPreview post={post} key={post.slug + index} />
            ))}
      </div>
    </Layout>
  )
}

export default Blogs
