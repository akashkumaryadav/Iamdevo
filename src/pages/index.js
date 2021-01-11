import React from "react"
import About from "../components/About"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Layout from "../components/layout"
import Skills from "../components/Skills"
import Blogs from "./blogs"
import Projects from "./projects"

export default () => {
  // using custom post hook

  // lifeCycle method
  return (
    // parent Base component to manage globel styling
    <Layout>
      <Banner />
      <Blogs />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </Layout>
  )
}
