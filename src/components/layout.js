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
      {/* header section of the app  */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#de135b" />
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#080707" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossorigin="anonymous"
        ></link>
        <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
      </Helmet>
      {/* endheader  */}
      {/* app aria for rest of the app body section */}
      <div
        className={`${
          lightTheme ? "theme-lightest" : "theme-darkest"
        } max-w-full   bg-primary text-primaryText`}
      >
        <AppMenu changeTheme={setLightTheme} currenttheme={lightTheme} />
        {children}
      </div>
      {/* endaria  */}
    </>
  )
}

export default Layout
