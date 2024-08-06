import React, { useState } from "react";
import SearchBar from "./components/searchBar";
import WeatherCard from "./components/weatherCard";
import { fetchWeather } from "./components/weatherService";

const App = () => {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeather(city);
      setCities([...cities, data]);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {cities.map((city, index) => (
            <WeatherCard key={index} weather={city} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
