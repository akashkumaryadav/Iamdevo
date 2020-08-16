import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
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

const Header = () => {
  let transite = false
  return (
    <header
      css={css`
        background-color: #663399;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem calc((100vw - 700px - 0.5rem) / 2);
        margin: 0;
        transform: translateY(${transite ? "-50vh" : "0"});
        transition: transform 800ms linear;
      `}
    >
      <Navlink
        paintDrip
        hex="#663399"
        duration={0.6}
        to="/"
        css={css`
          font-family: "Pacifico", Arial, Helvetica, sans-serif;
          font-size: 1.2rem;
        `}
      >
        Iamdevo
      </Navlink>
      <nav
        css={css`
          margin-top: 0;
        `}
      >
        <Navlink cover to="/">
          Blog
        </Navlink>
        <Navlink swipe direction="left" top="exit" to="/about" duration={0.6}>
          About
        </Navlink>
      </nav>
    </header>
  )
}

export default Header
