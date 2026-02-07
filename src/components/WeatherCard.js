import React from "react";

function WeatherCard({ weather }) {
  if (!weather || !weather.main) {
    return <h3>Search a city to see weather</h3>;
  }

  return (
    <div>
      <h2>{weather.name}</h2>
      <h3>{weather.main.temp} °C</h3>
      <p>{weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
