import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../list/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from "@mui/material";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center flex-col">
      <h1 className="mt-8 text-gray-800 text-3xl"> {project.name}</h1>
      <img className="w-96 rounded-lg" src={project.image} alt={project.name}/>
      <p className="text-2xl text-gray-800">
        <b>Skills:</b> {project.skills}
      </p>
      <IconButton onClick={() => window.open(project.link, '_blank')}>
        <GitHubIcon className="text-gray-800 text-3xl"/>
      </IconButton>
    </div>
  );
}

export default ProjectDisplay;
