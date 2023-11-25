import React from "react";
import { Element } from "react-scroll";
import Topcontent from "../topcontent/Topcontent";
import "./Topcontainer.css"
import Leftcontent from "../topcontent/Leftcontent";

const Topcontainer = () => {
  return (
    <Element name="about" className="topcontainer">
      <Topcontent />
      <Leftcontent/>
    </Element>
  );
};

export default Topcontainer;
