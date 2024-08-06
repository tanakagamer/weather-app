import React from "react";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";

const getWeatherIcon = (description) => {
  switch (description) {
    case "clear sky":
      return <WiDaySunny className="text-yellow-500 text-4xl" />;
    case "few clouds":
    case "scattered clouds":
    case "broken clouds":
      return <WiCloud className="text-gray-500 text-4xl" />;
    case "shower rain":
    case "rain":
      return <WiRain className="text-blue-500 text-4xl" />;
    case "thunderstorm":
      return <WiThunderstorm className="text-purple-500 text-4xl" />;
    case "snow":
      return <WiSnow className="text-white text-4xl" />;
    case "mist":
      return <WiFog className="text-gray-400 text-4xl" />;
    default:
      return <WiDaySunny className="text-yellow-500 text-4xl" />;
  }
};
const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md flex items-center">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-800">{weather.name}</h2>
        <p className="text-lg">Temperature: {weather.main.temp}°C</p>
        <p className="text-lg">Condition: {weather.weather[0].description}</p>
        <p className="text-lg">Humidity: {weather.main.humidity}%</p>
      </div>
      <div className="ml-4">
        {getWeatherIcon(weather.weather[0].description)}
      </div>
    </div>
  );
};
export default WeatherCard;
