import React from "react"
import "../assets/styles/main.css"
import { css } from "@emotion/core"
export function Mdxlayout({ children }) {
  return (
    <article
      className="p-2"
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
          list-style: upper-roman;
        }

        * + * {
          margin: 1rem;
        }
        pre {
          display: flex;
          overflow: auto;
        }
        a[target="_blank"] {
          font-size: 0.8rem;
          background-color: rgba(241, 130, 141, 1);
          padding: 18px 36px;
          border-radius: 2px;
          margin: 2rem;
        }

        p {
          margin: 1rem;
        }
        padding-bottom: 2rem;
      `}
    >
      {children}
    </article>
  )
}
