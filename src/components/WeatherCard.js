import React from 'react';

const WEATHER_ICONS = {
  'clear sky': '☀️',
  'few clouds': '🌤️',
  'scattered clouds': '⛅',
  'broken clouds': '☁️',
  'overcast clouds': '☁️',
  'shower rain': '🌦️',
  'light rain': '🌦️',
  'moderate rain': '🌧️',
  'heavy intensity rain': '⛈️',
  'rain': '🌧️',
  'thunderstorm': '⛈️',
  'snow': '❄️',
  'light snow': '🌨️',
  'mist': '🌫️',
  'haze': '🌫️',
  'fog': '🌫️',
  'smoke': '🌫️',
  'drizzle': '🌦️',
};

function getIcon(desc = '') {
  const d = desc.toLowerCase();
  for (const [key, icon] of Object.entries(WEATHER_ICONS)) {
    if (d.includes(key)) return icon;
  }
  return '🌡️';
}

function getHumidityStatus(h) {
  if (h < 30) return { label: 'Dry', cls: 'badge-yellow' };
  if (h < 60) return { label: 'Comfortable', cls: 'badge-green' };
  if (h < 80) return { label: 'Humid', cls: 'badge-yellow' };
  return { label: 'Very Humid', cls: 'badge-red' };
}

function getVisibilityStatus(v) {
  if (v >= 10) return { label: 'Excellent', cls: 'badge-green' };
  if (v >= 5)  return { label: 'Good', cls: 'badge-green' };
  if (v >= 2)  return { label: 'Moderate', cls: 'badge-yellow' };
  return { label: 'Poor', cls: 'badge-red' };
}

function getWindLabel(s) {
  if (s < 2)  return 'Calm';
  if (s < 6)  return 'Light Breeze';
  if (s < 12) return 'Moderate';
  if (s < 20) return 'Strong';
  return 'Storm';
}

function formatDate() {
  return new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function WeatherCard({ data }) {
  const { name, sys, main, weather, wind, visibility } = data;

  const desc      = weather[0]?.description || '';
  const icon      = getIcon(desc);
  const temp      = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);
  const humidity  = main.humidity;
  const windSpeed = Math.round(wind.speed * 10) / 10;
  const visKm     = visibility ? +(visibility / 1000).toFixed(1) : null;
  const pressure  = main.pressure;
  const tempMin   = Math.round(main.temp_min);
  const tempMax   = Math.round(main.temp_max);

  const humStatus = getHumidityStatus(humidity);
  const visStatus = visKm !== null ? getVisibilityStatus(visKm) : null;

  return (
    <div className="weather-dashboard">

      {/* Hero */}
      <div className="hero-card">
        <div className="hero-left">
          <div className="hero-city-row">
            <span className="hero-city">{name}</span>
            <span className="hero-country">{sys.country}</span>
          </div>
          <p className="hero-date">{formatDate()}</p>
          <div className="hero-temp-row">
            <span className="hero-temp">{temp}</span>
            <span className="hero-unit">°C</span>
          </div>
        </div>
        <div className="hero-right">
          <span className="hero-icon">{icon}</span>
          <p className="hero-condition">{desc}</p>
          <p className="hero-feels">Feels like {feelsLike}°C</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Humidity</span>
            <div className="stat-icon-box icon-blue">💧</div>
          </div>
          <div>
            <span className="stat-value">{humidity}</span>
            <span className="stat-unit"> %</span>
          </div>
          <div className="stat-bar-track">
            <div className="stat-bar-fill" style={{
              width: `${humidity}%`,
              background: humidity > 75 ? '#e05c5c' : humidity > 55 ? '#f5c542' : '#4f8ef7'
            }} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Wind Speed</span>
            <div className="stat-icon-box icon-green">💨</div>
          </div>
          <div>
            <span className="stat-value">{windSpeed}</span>
            <span className="stat-unit"> m/s</span>
          </div>
          <div className="stat-bar-track">
            <div className="stat-bar-fill" style={{
              width: `${Math.min((windSpeed / 25) * 100, 100)}%`,
              background: windSpeed > 15 ? '#e05c5c' : windSpeed > 8 ? '#f5c542' : '#3ecf8e'
            }} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Visibility</span>
            <div className="stat-icon-box icon-purple">👁️</div>
          </div>
          <div>
            <span className="stat-value">{visKm ?? '—'}</span>
            <span className="stat-unit"> km</span>
          </div>
          <div className="stat-bar-track">
            <div className="stat-bar-fill" style={{
              width: visKm ? `${Math.min((visKm / 10) * 100, 100)}%` : '0%',
              background: '#7c3aed'
            }} />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Pressure</span>
            <div className="stat-icon-box icon-amber">🌐</div>
          </div>
          <div>
            <span className="stat-value">{pressure}</span>
            <span className="stat-unit"> hPa</span>
          </div>
          <div className="stat-bar-track">
            <div className="stat-bar-fill" style={{
              width: `${Math.min(((pressure - 950) / 100) * 100, 100)}%`,
              background: '#f5c542'
            }} />
          </div>
        </div>

      </div>

      {/* Info Row */}
      <div className="info-row">

        <div className="info-card">
          <p className="info-card-title">Temperature Range</p>
          <div className="info-list">
            <div className="info-item">
              <span className="info-key">Current</span>
              <span className="info-val">{temp}°C</span>
            </div>
            <div className="info-item">
              <span className="info-key">Feels Like</span>
              <span className="info-val">{feelsLike}°C</span>
            </div>
            <div className="info-item">
              <span className="info-key">Min / Max</span>
              <span className="info-val">{tempMin}° / {tempMax}°</span>
            </div>
          </div>
        </div>

        <div className="info-card">
          <p className="info-card-title">Conditions</p>
          <div className="info-list">
            <div className="info-item">
              <span className="info-key">Humidity</span>
              <span className={`badge ${humStatus.cls}`}>{humStatus.label}</span>
            </div>
            <div className="info-item">
              <span className="info-key">Wind</span>
              <span className="info-val">{getWindLabel(windSpeed)}</span>
            </div>
            {visStatus && (
              <div className="info-item">
                <span className="info-key">Visibility</span>
                <span className={`badge ${visStatus.cls}`}>{visStatus.label}</span>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;