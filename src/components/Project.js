import React from "react"

const langcolor = {
  JavaScript: "yellow-500",
  Shell: "red-600",
  HTML: "orange-300",
  CSS: "blue-600",
  Vue: "green-300",
  Java: "yellow-800",
  SCSS: "pink-400",
}
const Project = ({ project }) => {
  return (
    <div className="border-gray-500 border-solid border rounded-lg px-5 pt-4 pb-2">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group text-md font-bold text-blue-500  "
      >
        <i className="fas fa-book mx-1"> </i>
        {project.name}
        <i className="fas fa-link mx-1 text-primary group-hover:text-blue-500"></i>
      </a>{" "}
      <p className="text-sm text-gray-500 my-2">{project.description}</p>
      <span className="flex flex-row flex-wrap space-x-2 mt-4">
        {project.languages.nodes.map((lang, index) => (
          <p key={index} className="text-sm flex flex-row items-center">
            <b
              className={`rounded-full w-4 h-4 bg-${langcolor[lang.name]} mx-1`}
            ></b>
            {lang.name}
          </p>
        ))}
      </span>
      {project.homepageUrl && (
        <a
          href={project.homepageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row justify-center items-center pt-4 pb-4 "
        >
          <p className="bg-warning text-primary py-1 px-5 rounded-full ">
            Hosted Project <i className="fas fa-external-link-alt ml-2"></i>
          </p>
        </a>
      )}
    </div>
  )
}

export default Project
