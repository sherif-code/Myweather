



import useWeatherStore from "../store/WeatherStore";

export default function WeatherCard() {
  const { weather, city, loading, error } = useWeatherStore();

  if (loading) return <p>⏳ Loading weather...</p>;
  if (error) return <p className="text-red-500">⚠️ {error}</p>;
  if (!weather) return null;

  return (
    <div className="p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800 mb-4">
      <h2 className="text-xl font-semibold mb-2">Current Weather</h2>
      <p className="text-lg">{city}</p>
      <p>🌡️ Temp: {Math.round(weather.main.temp)}°</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>💨 Wind: {weather.wind.speed} m/s</p>
      <p>☁️ Condition: {weather.weather[0].description}</p>
    </div>
  );
}

