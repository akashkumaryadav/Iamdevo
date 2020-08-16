import React from "react"
import { Global, css } from "@emotion/core"
import Header from "../components/header"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/siteMetadata"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Global
        styles={css`
          /* google fonts */
          @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
          * {
            box-sizing: border-box;
            margin: 0;
          }

          // lobotomise owl selector

          * + * {
            margin-top: 0rem;
          }

          body,
          html {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, "segoe UI", Roboto,
              Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 1.8rem;
            /* remove margin from the div that gatsby mount*/
            > div {
              margin-top: 0;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1rem;

              + * {
                margin-top: 0.5rem;
              }
              strong {
                color: #222;
              }

              li {
                margin-top: 0.25rem;
              }
            }
          }
          /* width */
          ::-webkit-scrollbar {
            width: 10px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #663399dd;
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: #663399ff;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 700px;
          * + * {
            margin: 1rem;
          }
          h2 {
            line-height: 2rem;
          }
          a {
            margin: 2rem;
          }
        `}
      >
        {children}
      </main>
    </>
  )
}

export default Layout
