import React from "react"
import { css } from "@emotion/core"

const heroContainer = css`
  background: url("https://images.pexels.com/photos/1629998/pexels-photo-1629998.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  justify-content: center;
`

const heroText = css`
  width: 100%;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  margin: auto;
  padding: 5px;
`

function Hero() {
  return (
    <section css={heroContainer}>
      <div css={heroText}>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          quo.
        </h1>
      </div>
    </section>
  )
}

export default Hero
