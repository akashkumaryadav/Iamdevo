import React from "react"
import { css } from "@emotion/core"
import Typewriter from "typewriter-effect"

const banner = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: #2f4550
    radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 24%,
      rgba(0, 0, 0, 0.65) 100%
    );
  background-size: cover;
  color: white;
  text-align: center;
  border-bottom-left-radius: 25%;
  word-wrap: wrap;
  font-family: "Poppins";
  @media (max-width: 700px) {
    border-bottom-left-radius: 0%;
  }
`

const Banner = () => {
  return (
    <div
      className="bg-primary bg-cover bg-no-repeat text-white flex justify-center items-center min-h-1/2"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%),url(https://images.unsplash.com/photo-1609011183532-fe0b14486404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80)",
        height: "50vh",
      }}
    >
      <h1
        id="banner-text"
        className="text-3xl md:text-4xl lg:text-5xl align-middle justify-center"
      >
        I Am{" "}
        <span id="banner-text-animated" className="text-info">
          <Typewriter
            options={{
              strings: ["Web Developer", "CS Graduate", "Bogger"],
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
