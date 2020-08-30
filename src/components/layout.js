import React from "react"
import { Global, css } from "@emotion/core"
import Header from "../components/header"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/siteMetadata"
import "../assets/styles/main.css"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          body {
            > div {
              margin: 0;
            }
            background-color: rgba(26, 32, 44, 1);
            font-family: "Noto sans";
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <script
          src="https://kit.fontawesome.com/5ad399a984.js"
          crossorigin="anonymous"
        ></script>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main className="p-2 lg:max-w-screen-md m-auto bg-gray-900 text-gray-100 h-screen">
        {children}
      </main>
    </>
  )
}

export default Layout
