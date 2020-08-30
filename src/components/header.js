import React from "react"
import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/core"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navlink = styled(AniLink)`
  color: #fff;
  font-size: 1rem;
  font-weight: "normal";
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 1px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const blink = keyframes`
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }
`

const Header = () => {
  let transite = false
  return (
    <>
      <nav
        className="flex  bg-gray-850 text-gray-100 justify-between border-b-2 border-gray-600"
        css={css`
          padding: 1.25rem calc((100vw - 780px) / 2);
        `}
      >
        <header className="text-xl">
          <Link
            to="/"
            css={css`
              font-family: "Roboto Condensed", sans-serif;
            `}
          >
            > $ cd /home{" "}
            <span
              className="text-green-500"
              css={css`
                min-width: 10px;
                min-height: 15px;
                background-color: rgba(72, 187, 120, 1);
                opacity: 1;
                animation: ${blink} 1s ease infinite;
              `}
            >
              {"_"}
            </span>
          </Link>
        </header>
        <ul className="space-x-8 pl-4">
          <Link to="/blogs">/Posts</Link>
          <Link className="pr-1" to="/about">
            /About
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Header
