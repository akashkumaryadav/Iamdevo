import React from "react"
import { FadeIn } from "../utils/GsapAnimations"

const About = () => {
  return (
    <>
      <div className="container mx-auto mt-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">About Me</h1>
        <FadeIn repeat={false}>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-1 mt-5 gap-y-0">
            <div>
              <img
                src="../../profileSample.png"
                alt=""
                className="bg-primary rounded-lg md:rounded-tl-full md:rounded-bl-full h-full w-full shadow-2xl"
              />
            </div>
            <div
              className="bg-primary w-full md:col-start-2 md:col-end-6 md:row-start-1 md:row-end-1 p-2 md:p-20 border-warning rounded-lg shadow-2xl 
            md:border-l-0  md:rounded-tr-full md:rounded-br-full flex  flex-col flex-wrap justify-center items-center"
            >
              <section>
                <ul className="space-y-3 text-sm text-justify p-1  text-gray-500  md:text-lg lg:text-lg">
                  <li>
                    A detail oriented and multitasking professional with
                    exceptional coding techniques having bachelor of engineering
                    degree in computer science technology
                  </li>
                  <li>
                    Comprehensive knowledge of primary development languages for
                    instance Python, C++, JAVA,JavaScript and special talent of
                    writing highly competent programs.
                  </li>
                  <li>
                    Deep understanding regarding software development
                    environments and considerable talent in achieving critical
                    solutions.
                  </li>
                  <li>
                    Able to understand and implement modern operating systems
                    and great experience of their troubleshooting. Excellent in
                    presenting and make people understand.
                  </li>
                </ul>
                <span className="float-left text-lg p-2">~AkashKumarYadav</span>
              </section>
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  )
}

export default About
