import { useState } from "react";
import useWeatherStore from "../store/WeatherStore";

function SearchBar() {
  const [input, setInput] = useState("");
  const getWeather = useWeatherStore((state) => state.getWeather);

  const handleSearch = () => {
    if (input.trim()) {
      getWeather(input);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mb-4 w-full">
      {/* Left buttons group */}
      <div className="flex gap-3 mb-2 sm:mb-0">
        <button className="bg-[#232325] rounded-2xl border text-white px-4 py-2 hover:bg-[#444445] hover:text-white hover:shadow-lg">
          Toggle
        </button>
        <button className="bg-[#232325] rounded-2xl border text-white px-4 py-2 hover:bg-[#444445] hover:text-white hover:shadow-lg">
          Button
        </button>
      </div>

      {/* Search input */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city..."
        className="flex-1 p-2 bg-[#232325] rounded-lg text-white px-4 w-full sm:w-auto"
      />

      {/* Search button */}
      <button
        onClick={handleSearch}
        className="bg-[#232325] rounded-2xl text-white px-4 py-2 border hover:bg-[#444445] hover:text-white hover:shadow-lg mt-2 sm:mt-0"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
