import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "8f17f6c3c03e34f1ff94553215b7f245"; 

  const getWeather = async (city) => {
    if (!city) return;

    setLoading(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found");
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <h1>🌦 WeatherPro</h1>

      <SearchBar onSearch={getWeather} />

      {loading && <Loader />}

      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;

