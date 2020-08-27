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
          body {
            > div {
              margin: 0;
            }
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
