import React, { useState } from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/siteMetadata"

import "../styles/main.css"
import AppMenu from "./AppMenu"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  const [lightTheme, setLightTheme] = useState(false)

  return (
    <>
      {/* GLobal styles */}
      {/*  Header section of the app  */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossorigin="anonymous"
        ></link>
        <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
      </Helmet>
      <div
        className={`${
          lightTheme ? "theme-light" : "theme-darkest"
        } max-w-full  min-h-screen bg-primary text-info`}
      >
        <AppMenu changeTheme={setLightTheme} currenttheme={lightTheme} />
        {children}
      </div>
    </>
  )
}

export default Layout
