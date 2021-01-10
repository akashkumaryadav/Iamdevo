import React from "react"
import { FadeIn } from "../utils/GsapAnimations"
import Typewrite from "typewriter-effect"

const About = () => {
  return (
    <>
      <div className="container mx-auto p-8 mt-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">About Me</h1>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-1 mt-5 gap-y-0">
            <div className="bg-primary  md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1  ">
              <img
                src="../../profileSample.png"
                alt=""
                className="rounded-lg md:rounded-tl-full md:rounded-bl-full h-full w-full shadow-2xl"
              />
            </div>
            <div
              className="bg-primary w-full md:col-start-2 md:col-end-6 md:row-start-1 md:row-end-1 p-2 md:p-20 border-warning rounded-lg shadow-2xl 
            md:border-l-0  md:rounded-tr-full md:rounded-br-full flex  flex-col flex-wrap justify-center items-center"
            >
              <section>
                <p className="text-lg p-1  text-primaryText  md:text-xl lg:text-3xl">
                  My name is Akash Kumar Yadav currently pursuing Bachelor of
                  Enginneringin Computer science and Internet Of Things
                </p>
                <a href="https://pngtree.com/so/3d-creative">
                  3d creative png from pngtree.com
                </a>
              </section>
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  )
}

export default About
