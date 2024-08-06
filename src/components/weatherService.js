const API_KEY = "4edd80aece6dec868935f40ea8041f32";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
  const response = await fetch(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error("City not found");
  }
  return response.json();
};
