import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);

  const getWeather = async (city) => {
    const apiKey = "833f26184b28354684f185010626edad";

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await res.json();
    setWeather(data);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={getWeather} />
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
