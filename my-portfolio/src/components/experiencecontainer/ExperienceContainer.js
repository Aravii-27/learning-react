import React from "react";
import Experience from "../eperiencebox/Experience";
import "./ExperienceContainer.css"
import "../../assets/Coding.jpg" 

const ExperienceContainer = () => {
  return (
    <div className="experienceContainer" id="exp">
      <h1>EXPERIENCE</h1>
      <div className="experienceContainer__info">
      <Experience number="10+" title="Learnings" />
      <Experience number="10+" title="Learnings" style={{backgroundColor:"#0071ff" }} />
      <Experience number="10+" title="Learnings" />
      <Experience number="10+" title="Learnings" />
      </div> 
    </div>
  );
};

export default ExperienceContainer;
