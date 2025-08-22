import { useState } from "react";
import useWeatherStore from "../store/WeatherStore";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const getWeather = useWeatherStore((state) => state.getWeather);

  const handleSearch = () => {
    if (input.trim()) {
      getWeather(input);
      setInput("");
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city..."
        className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
      >
        Search
      </button>
    </div>
  );
}
