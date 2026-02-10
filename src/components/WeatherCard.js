import React from "react";

function WeatherCard({ data }) {
  if (!data) return null;

  return (
    <div className="card">
      <h2>{data.name}</h2>
      <h1>{data.main.temp}°C</h1>
      <p>{data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
}

export default WeatherCard;

