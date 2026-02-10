import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button className="btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;

