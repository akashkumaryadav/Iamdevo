import React from "react"
import Project from "../components/Project"
import { useGithubdata } from "../hooks/useGithubdata"
import { FadeIn } from "../utils/GsapAnimations"

const Projects = () => {
  const gdata = useGithubdata()
  return (
    <>
      <div className="container mx-auto p-8 ">
        <h1 className="text-3xl md:text-5xl ">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mt-5">
          {gdata.map(project => (
            <FadeIn key={project.id}>
              <div>
                <Project project={project} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  )
}
export default Projects
