import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import usePostsdata from "../hooks/usePostsdata"
import PostPreview from "../components/postPreview"
import Hero from "../components/hero"
import Search from "../components/search"
import { css } from "@emotion/core"

export default () => {
  const data = usePostsdata()
  const [filteredpost, setFilteredPost] = useState(undefined)
  const [searching, setSearching] = useState(false)
  const renderfilteredpost = posts => {
    if (posts) {
      setFilteredPost(posts)
      setSearching(true)
    } else {
      setSearching(false)
      setFilteredPost(data)
    }
  }
  useEffect(() => {}, [filteredpost])
  return (
    <>
      <Hero />
      <Layout>
        <Search posts={data} filteredpost={renderfilteredpost} />
        <div>
          <h1>{searching ? "Filtered posts" : "Recent Posts"}</h1>
          {!filteredpost &&
            data.map(post => <PostPreview key={post.title} post={post} />)}
          {filteredpost && filteredpost.length > 0 ? (
            filteredpost.map(post => (
              <PostPreview kwy={post.tile} post={post} />
            ))
          ) : (
            <h1
              css={css`
                margin: 2rem;
                text-align: center;
                color: #aaa;
              `}
            >
              No results found
            </h1>
          )}
        </div>
      </Layout>
    </>
  )
}
