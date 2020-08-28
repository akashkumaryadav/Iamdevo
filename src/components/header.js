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
    <nav
      className="flex p-5 bg-gray-800 text-white justify-between"
      css={css`
        padding: 1.25rem calc((100vw - 768px) / 2);
      `}
    >
      <header
        className="text-xl"
        css={css`
          font-family: "pacifico";
        `}
      >
        Iamdevo
      </header>
      <ul className="space-x-5">
        <Link activeClassName="border-b-2 border-white pb-6" to="/">
          Home <i className="fas fa-home"></i>
        </Link>
        <Link activeClassName="border-b-2 border-white  pb-6" to="/blogs">
          Blog <i className="fas fa-rss"></i>
        </Link>
        <Link
          activeClassName="border-b-2 border-white  pb-6"
          className="pr-1"
          to="/about"
        >
          About <i class="fas fa-address-card"></i>
        </Link>
      </ul>
    </nav>
  )
}

export default Header
