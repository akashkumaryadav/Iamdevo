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
              background-color: #f7f8f7;
            }
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
      <main>{children}</main>
    </>
  )
}

export default Layout
