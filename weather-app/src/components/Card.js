import React from "react";
import { Input, Button } from "@mui/material";
import logo from "../images/google-logo.png";
import "./Card.css";

const Card = ({ input, setInput, findWeather }) => {
  const inputHandler = async (event) => {
    setInput(event.target.value);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    findWeather();
    console.log(findWeather);
  };

  console.log(input);
  return (
    <div className="container">
      <div className="container_field">
        <h1>Google Weather App</h1>
        <p>Powered by</p>
        <img src={logo} alt="logo"></img>
        <form>
          <Input
            placeholder="enter city"
            onChange={inputHandler}
            value={input}
          />

          <br />
          <Button variant="contained" type="submit" onClick={clickHandler}>
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Card;
