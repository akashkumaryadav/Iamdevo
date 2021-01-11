import React from "react"
import { css } from "@emotion/core"

import { colors } from "tailwindcss/defaultTheme"

export function Mdxlayout({ children }) {
  return (
    <article
      className="container mx-auto list-decimal p-2 md:px-8 text-primaryText text-md  space-y-10"
      css={css`
        h1 {
          font-size: xx-large;
          font-weight: bold;
          @media (max-width: 600px) {
            font-size: 1rem;
          }
        }
        h2 {
          font-size: x-large;
          font-weight: bold;

          @media (max-width: 600px) {
            font-size: 1rem;
          }
        }
        h3 {
          font-size: large;
          font-weight: bold;

          @media (max-width: 600px) {
            font-size: 1rem;
          }
        }
        h4 {
          font-size: medium;
          font-weight: bold;

          @media (max-width: 600px) {
            font-size: 1rem;
          }
        }
        h5 {
          font-size: small;
          font-weight: bold;

          @media (max-width: 600px) {
            font-size: 1rem;
          }
        }
        h6 {
          font-size: smaller;
          font-weight: bold;

          @media (max-width: 600px) {
            font-size: 1rem;
          }
        }

        li {
          list-style: upper-disc;
        }

        * + * {
          margin: 1rem;
        }

        a[target="_blank"] {
          padding: 2px 10px 10px 2px;
          display: flex;
          color: white;
          justify-content: center;
          justify-items: center;
          background-color: ${colors.gray[500]};
          align-items: center;
          border-radius: 2px;
          width: 200px;
          margin: 2rem;
          @media (max-width: 400px) {
            max-width: 240px;
            font-size: 0.7rem;
            padding: 3px 10px;
          }
        }
      `}
    >
      {children}
    </article>
  )
}
