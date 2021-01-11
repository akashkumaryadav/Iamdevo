import React from "react"
import { FadeIn } from "../utils/GsapAnimations"

// TODO padding on on small screens
const Skills = () => {
  return (
    <div className="p-8 mt-5">
      <div className="container mx-auto px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">SKills</h1>
        <FadeIn repeat={false}>
          <div className="grid grid-cols-4 gap-4  md:grid-cols-5  lg:grid-cols-7  md:p-10">
            <img
              src="https://img.icons8.com/color/96/26e07f/vue-js.png"
              alt="vuejs"
            />
            <img
              src="https://img.icons8.com/color/96/26e07f/react-native.png"
              alt="reactjs"
            />
            <img
              src="https://img.icons8.com/windows/96/26e07f/nodejs.png"
              alt="nodejs"
            />
            <img
              src="https://img.icons8.com/color/96/26e07f/javascript.png"
              alt="javascript"
            />
            <img
              src="https://img.icons8.com/color/96/000000/html-5.png"
              alt="html5"
            />

            <img
              src="https://img.icons8.com/color/96/000000/css3.png"
              alt="css3"
            />
            <img
              src="https://img.icons8.com/color/96/26e07f/python.png"
              alt="python"
            />
            <img
              src="https://img.icons8.com/color/96/000000/c-plus-plus-logo.png"
              alt="c-plus-plus"
            />
            <img
              src="https://img.icons8.com/fluent/96/000000/github.png"
              alt="git and github"
            />
            <img
              src="https://img.icons8.com/color/96/000000/docker.png"
              alt="docker"
            />
            <img
              src="https://img.icons8.com/color/96/000000/redux.png"
              alt="redux"
            />
            <img
              src="https://symbols.getvecta.com/stencil_81/10_gatsbyjs-icon.6dcf1e65b8.svg"
              alt="gatsbyjs"
              style={{ width: "96px" }}
            />
            <img
              src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png"
              alt="hava"
            />
            <img
              src="https://img.icons8.com/color/96/000000/mongodb.png"
              alt="mongodb"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

export default Skills
