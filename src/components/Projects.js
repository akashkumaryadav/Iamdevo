import React from "react"

const Projects = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl md:text-5xl lg:text-6xl">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-x-8 gap-y-1">
        {/* 1 */}
        <div className="p-6 max-w bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <i className="fas fa-envelope text-4xl text-blue-800"></i>
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
        {/* 2 */}
        <div className="p-6 max-w bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <i className="fas fa-envelope text-4xl text-blue-800"></i>
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
        {/* 3 */}
        <div className="p-6 max-w bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <i className="fas fa-envelope text-4xl text-blue-800"></i>
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
        {/* 4 */}
        <div className="p-6 max-w bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <i className="fas fa-envelope text-4xl text-blue-800"></i>
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
