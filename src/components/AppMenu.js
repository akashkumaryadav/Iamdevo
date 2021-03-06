import { css } from "@emotion/core"
import { Link } from "gatsby"
import React from "react"
import Logo from "./Logo"

const toglebutton = css`
  .toggle__dot {
    left: -0.25rem;
    width: 2rem;
    height: 2rem;
    background-size: contain;
    background-position: center;
    background-image: ${"url(https://img.icons8.com/doodle/48/000000/sun--v1.png)"};
  }
  input:checked ~ .toggle__dot {
    transform: translateX(100%);
    left: -1rem;
    background-image: ${"url(https://img.icons8.com/plasticine/100/000000/snowy-night.png )"};
  }
`

const AppMenu = ({ currenttheme, changeTheme }) => {
  return (
    <>
      <nav className="fixed bg-black shadow-2xl block h-20  w-full z-20 top-0 text-white">
        <div className="container p-8 my-0 py-0  flex justify-between mx-auto items-center">
          <Link to="/">
            <Logo />
          </Link>

          <div
            className="flex items-center justify-center float-left"
            css={toglebutton}
          >
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={!currenttheme}
                  className="hidden"
                  onChange={() => changeTheme(() => !currenttheme)}
                  onClick={() => changeTheme(() => !currenttheme)}
                />
                <div className="w-12 h-8 bg-gray-400 rounded-full shadow-inner"></div>
                <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0 text-center mb-2"></div>
              </div>
            </label>
          </div>
        </div>
      </nav>
    </>
  )
}

export default AppMenu
