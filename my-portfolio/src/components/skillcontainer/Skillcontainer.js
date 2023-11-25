import React from "react";
import { Element } from "react-scroll";
import skilling from "../../assets/skilling.png";
import { LinearProgress } from "@mui/material";
import "./Skillcontainer.css"

const Skillcontainer = () => {
  return (
    <Element name="skills" className="skillcontainer">
      <div className="skillcontainer__image">
        <img src={skilling} alt="" />
      </div>
      <div className="skillcontainer__text">
        <h2>SKILLSET</h2>
        <div className="skillcontainer__skillset">
          <h5>HTML & CSS</h5>
          <div className="skillcontainer__slider skillcontainer__slider1">
            <LinearProgress variant="determinate" value={90} />
          </div>
          <h5>JavaScript</h5>
          <div className="skillcontainer__slider skillcontainer__slider2">
            <LinearProgress variant="determinate" value={70} />
          </div>
          <h5>Python</h5>
          <div className="skillcontainer__slider skillcontainer__slider3">
            <LinearProgress variant="determinate" value={70} />
          </div>
          <h5>RDMS(MySql)</h5>
          <div className="skillcontainer__slider skillcontainer__slider4">
            <LinearProgress variant="determinate" value={50} />
          </div>
          <h5>React</h5>
          <div className="skillcontainer__slider skillcontainer__slider5">
            <LinearProgress variant="determinate" value={30} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skillcontainer;
