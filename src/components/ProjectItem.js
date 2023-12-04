import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  console.log(image)
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{backgroundImage: `url(${image})`}}
      className="rounded-tl-3xl rounded-tr-3xl w-full h-200 bg-center bg-no-repeat bg-cover" />
      <h1 className="text-2xl"> {name} </h1>
    </div>
  );
}

export default ProjectItem;