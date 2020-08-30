import React, { useState } from "react"
import { css } from "@emotion/core"

const searchform = css`
  width: 100%;

  margin: 0;
  & > input {
    margin: 0 auto 2rem auto;
    padding: 0.2rem;
    border: none;
    border-bottom: 2.5px solid whitesmoke;
    outline: none;
    width: 100%;
    height: 100%;
    line-height: 2rem;
    font-size: 2rem;
    &::placeholder {
      font-size: 1rem;
      text-align: center;
      color: white;
      opacity: 0.9;
    }
  }
`

const Search = ({ posts, filteredpost }) => {
  const handleOnChange = event => {
    if (event.target.value === "") {
      filteredpost(undefined)
    } else {
      filteredpost(
        posts.filter(post => {
          const regex = new RegExp(`${event.target.value}`, "gi")
          return post.tags.match(regex) || post.title.match(regex)
        })
      )
    }
  }

  return (
    <>
      <form css={searchform}>
        <input
          className="bg-transparent"
          name="search"
          onChange={handleOnChange}
          placeholder="looking for something 🔍"
        />
      </form>
    </>
  )
}

export default Search
