import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';

const API_KEY = 'teri_actual_key';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) {
        if (data.cod === '404') {
          setError(`City "${city}" not found. Check spelling and try again.`);
        } else if (data.cod === 401) {
          setError('Invalid API key. Update it in App.js.');
        } else {
          setError(data.message || 'Something went wrong. Try again.');
        }
        return;
      }

      setWeatherData(data);
    } catch (err) {
      setError('Network error. Check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-wrapper">
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-icon">🌦️</div>
          <div>
            <div className="navbar-title">WeatherPro</div>
            <div className="navbar-sub">Real-time weather dashboard</div>
          </div>
        </div>
        <div className="navbar-badge">OpenWeather API</div>
      </nav>

      <main className="main-content">
        <SearchBar onSearch={fetchWeather} loading={loading} />

        {error && (
          <div className="error-banner">⚠️ {error}</div>
        )}

        {loading && <Loader />}

        {!loading && !error && !weatherData && (
          <div className="empty-state">
            <div className="empty-icon">🌍</div>
            <p className="empty-title">Search for any city to get started</p>
            <p className="empty-sub">Temperature, humidity, wind speed and more</p>
          </div>
        )}

        {!loading && weatherData && (
          <WeatherCard data={weatherData} />
        )}
      </main>

      <footer className="footer">
        WeatherPro · Built with React.js · Data from OpenWeather API
      </footer>
    </div>
  );
}

export default App;