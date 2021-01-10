import React from "react"
import { FadeIn } from "../utils/GsapAnimations"
import Typewrite from "typewriter-effect"

const About = () => {
  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl">
          <Typewrite
            options={{
              strings: "About Me",
              autoStart: true,
              loop: true,
              deleteSpeed: 5,
            }}
          />
        </h1>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-1 mt-5 gap-y-10">
            <div className="bg-primary  md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1 ">
              <img
                src="../../profile.jpeg"
                alt=""
                className="md:rounded-tl-full md:rounded-bl-full h-full w-full"
              />
            </div>
            <div
              className="bg-primary w-full md:col-start-2 md:col-end-6 md:row-start-1 md:row-end-1 p-2 md:p-20 border-info border-solid border-2 
            md:border-l-0  md:rounded-tr-full md:rounded-br-full flex  flex-col flex-wrap justify-center items-center"
            >
              <section>
                <p className="text-lg p-1  text-white  md:text-xl lg:text-3xl">
                  My name is Akash Kumar Yadav currently pursuing Bachelor of
                  Enginnering from Chandigarh University in Computer science
                </p>
              </section>
              <section className="text-4xl md:text-6xl m-2 space-x-8">
                <i className="fab fa-github text-white"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-whatsapp text-green-700"></i>
              </section>
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  )
}

export default About
