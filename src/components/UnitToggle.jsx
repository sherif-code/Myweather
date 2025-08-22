import useWeatherStore from "../store/WeatherStore";

export default function UnitToggle() {
  const { unit, toggleUnit, city, getWeather } = useWeatherStore();

  const handleToggle = () => {
    toggleUnit();
    if (city) getWeather(city);
  };

  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={handleToggle}
        className="px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-700"
      >
        {unit === "metric" ? "Switch to °F" : "Switch to °C"}
      </button>
    </div>
  );
}
