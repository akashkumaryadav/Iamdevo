import React from "react"
import About from "../components/About"
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
      <div className="mt-24  space-y-14">
        <Blogs />
        <Projects />
        <Skills />
        <About />
        <Footer />
      </div>
    </Layout>
  )
}
