import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  console.log(image)
  return (
    <div
      className="border rounded-lg overflow-hidden shadow-md w-300 h-300 m-40 text-center projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{backgroundImage: `url(${image})`}}
      className="rounded-tl-lg rounded-tr-lg w-full h-200 bg-center bg-no-repeat bg-cover bgImage cursor-pointer" />
      <h1 className="text-2xl"> {name} </h1>
    </div>
  );
}

export default ProjectItem;