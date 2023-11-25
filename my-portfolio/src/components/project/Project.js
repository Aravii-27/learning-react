import React, { useState } from "react";
import "./Project.css"


const Project = ({ img, desc, title, link }) => {
  const [Show, setShow] = useState(false);
  return (
    <a href={link}>
      <div
        className="projects"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {Show ? (
          <div className="projects__content">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ) : (
          <img src={img} alt="" />
        )}
      </div>
    </a>
  );
};

export default Project;
