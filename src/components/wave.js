import { css } from "@emotion/core"
import React, { useState } from "react"

const Wave = () => {
  const [wave, setWave] = useState(0)
  return (
    <button
      onClick={() => setWave(wave + 1)}
      css={css`
        background-color: steelblue;
        padding: 0.5rem 1.2rem;
        border: none;
        border-radius: 5px;
        outline: none;
        &:hover {
          outline: none;
          box-shadow: 1px 1px 25px 5px rgba(25, 25, 25, 0.2);
        }
      `}
    >
      👋 {wave + " "}
      {wave <= 1 ? "wave" : "waves"}
    </button>
  )
}

export default Wave
