import React from "react"
import { css } from "@emotion/core"
import Typewriter from "typewriter-effect"

const banner = css`
  display: flex;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  align-items: center;
  height: 60vh;
  background-size: cover;
  color: white;
  text-align: center;
  word-wrap: wrap;
  font-family: "Poppins";
`

const Banner = () => {
  return (
    <div className="bg-banner-image  text-white " css={banner}>
      <h1
        id="banner-text"
        className="text-3xl md:text-4xl lg:text-5xl align-middle justify-center"
      >
        <span
          className="text-primaryText text-6xl"
          style={{ fontFamily: "Pacifico" }}
        >
          I
        </span>
        <span id="banner-text-animated" className="text-warning">
          <Typewriter
            options={{
              strings: ["am Web Developer", "am CS Graduate", "write blogs"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>
    </div>
  )
}

export default Banner
