import React, { useEffect, useState } from "react"
import { css } from "@emotion/core"

const toglebutton = css`
  .toggle__dot {
    top: -0.25rem;
    left: -0.25rem;
    transition: all 0.3s ease-in-out;
  }

  input:checked ~ .toggle__dot {
    transform: translateX(100%);
    background-color: #30bced;
  }
`

const AppMenu = ({ currenttheme, changeTheme }) => {
  return (
    <>
      <div className="bg-cyan text-primary  dark:bg-primary dark:text-white ">
        <div className="container p-8 flex justify-between mx-auto">
          <h1
            className="text-3xl text-info lg:text-4xl"
            style={{
              fontFamily: "Pacifico",
            }}
          >
            AKY
          </h1>
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
                  onChange={() => changeTheme(!currenttheme)}
                  onClick={() => changeTheme(!currenttheme)}
                />
                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
              </div>
              <div className="ml-3 text-gray-700 font-medium">
                <p className="text-info text-lg">Theme</p>
              </div>
            </label>
          </div>
        </div>
      </div>
      <hr className="border-secondaryPink" />
    </>
  )
}

export default AppMenu
