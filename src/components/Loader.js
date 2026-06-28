import React from 'react';

function Loader() {
  return (
    <div className="loader-wrap">
      <div className="spinner"></div>
      <span>Fetching weather data...</span>
    </div>
  );
}

export default Loader;