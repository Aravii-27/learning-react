import React from "react";
import { Button } from "@mui/material";
import "./Results.css";

const Results = ({ temp, description, icon , setTemp}) => {
  return (
    <div className="result_container">
      <div className="result_field">
        <h1>Temp:  {temp}°C &nbsp;</h1>
        <p>{description}</p>
        <img src={icon} alt="weather icon" /><br/>
        <Button variant="contained" onClick={()=>{
            setTemp('')
        }}>Back</Button>
      </div>
    </div>
  );
};

export default Results;
