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

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${API_KEY}&units=metric`
      );

      const data = await res.json();
      console.log("API DATA:", data);

      // IMPORTANT FIX
      if (data && data.main) {
        setWeather(data);
      } else {
        alert("City not found");
      }
    } catch (error) {
      console.log(error);
      alert("Error fetching data");
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

