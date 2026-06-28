import React, { useState } from 'react';

const QUICK_CITIES = ['Delhi', 'Mumbai', 'London', 'Jaipur', 'New York'];

function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState('');

  const handleSubmit = () => {
    if (city.trim()) onSearch(city.trim());
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const handleChip = (name) => {
    setCity(name);
    onSearch(name);
  };

  return (
    <div className="search-section">
      <p className="search-label">Search Location</p>
      <div className="search-row">
        <input
          className="search-input"
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="search-btn"
          onClick={handleSubmit}
          disabled={loading || !city.trim()}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      <div className="city-chips">
        {QUICK_CITIES.map((c) => (
          <button key={c} className="city-chip" onClick={() => handleChip(c)}>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;