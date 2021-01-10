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
      <footer className="shadow-2xl w-screen py-20">
        <div className="container mx-auto gap-x-10 grid grid-cols-1 md:grid-cols-2 w-full">
          {/* //#region social */}
          <div>
            <h4 className="text-5xl text-center">Social</h4>
            <section className="flex flex-row justify-center items-center  mt-20 space-x-3">
              <a
                href="http://https://tailwindcss.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl "
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://icons8.com/icon/111520/moon"
                className="text-4xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://fontawesome.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl"
              >
                <i class="fab fa-whatsapp text-succes"></i>
              </a>
              <a
                href="https://fontawesome.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl"
              >
                <i class="fab fa-hackerrank text-succes"></i>
              </a>
            </section>
          </div>
          {/* //#endregion social */}
          {/* //#region  resources */}
          <div>
            <h4 className="text-5xl text-center">Resources</h4>
            <section className="flex flex-col justify-center items-center  my-20 text-blue-500">
              {/* tailwind */}
              <a
                href="http://https://tailwindcss.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl "
              >
                www.tailwindcss.com
              </a>
              {/* icons moon  */}
              <a href="https://icons8.com/icon/" className="text-2xl">
                www.icons8.com
              </a>
              {/* fontawseome */}
              <a
                href="https://fontawesome.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
                www.fontawseome.com
              </a>
              {/* gatsby */}
              <a
                href="https://www.gatsbyjs.com/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
                www.gatsby.com
              </a>
            </section>
          </div>
          {/* //#endregion resources */}
        </div>
        <h4 className="text-center">&copy; akashkumaryadav</h4>
      </footer>
    </Layout>
  )
}
