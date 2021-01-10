import React from "react"
import { Reveal, Tween } from "react-gsap"

export const FadeIn = ({ children, repeat = true }) => (
  <Reveal repeat={repeat} trigger={<div />}>
    <Tween from={{ opacity: 0, duration: 2 }} ease="back.out(1.4)">
      {children}
    </Tween>
  </Reveal>
)
