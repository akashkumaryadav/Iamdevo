import React, { useEffect, useState } from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import { Link } from "gatsby"
import usePostdata from "../hooks/usePostsdata"
import Blogs from "./blogs"
import Banner from "../components/Banner"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import { ThemeContext } from "../ThemeContext"
import About from "../components/About"

export default () => {
  // using custom post hook
  const posts = usePostdata()

  // lifeCycle method
  useEffect(() => {}, [])

  return (
    // parent Base component to manage globel styling
    <Layout>
      <Banner />
      {/*TODO: displaying the recent posts */}
      <Blogs />
      <Skills />
      <About />
    </Layout>
  )
}
