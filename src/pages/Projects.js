import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../list/ProjectList";
import '../styles/Projects.css'

function Projects() {
  return (
    <div className="w-full h-auto flex justify-center items-center flex-col">
      <h1 className="text-center text-gray-800 text-4xl font-bold my-8">
        My Personal Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {ProjectList.map((project, idx) => (
          <ProjectItem key={idx} id={idx} name={project.name} image={project.image} body={project.body}/>
        ))}
      </div>
    </div>
  );
}

export default Projects;
