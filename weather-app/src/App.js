import axios from "axios";
import Card from "./components/Card";
import React from "react";
import { useState } from "react";
import Results from "./components/Results";

const App = () => {
  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
 

  const findWeather = async () => {
    const apiKey = "";
    const unit = "metric";
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      input +
      "&appid=" +
      apiKey +
      "&units=" +
      unit;
    const response = await axios.get(url);
    const temp = await response.data.main.temp;
    const description = await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    console.log(response);
    setTemp(temp);
    setDescription(description);
    setIcon(imageUrl);
    setInput('');
  };

  return (
    <div>
      {temp === "" ? (
        <Card input={input} setInput={setInput} findWeather={findWeather} />
      ) : (
        <Results temp={temp} description={description} icon={icon} setTemp={setTemp} />
      )}
    </div>
  );
};

export default App;
