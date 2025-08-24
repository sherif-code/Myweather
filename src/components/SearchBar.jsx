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
    <div className="flex  gap-15 mb-4">
      <div className="flex gap-5">
        <button className="bg-[#232325] rounded-2xl border-1 text-white px-4  hover:bg-[#444445] hover:text-white hover:shadow-lg">
          Toggle
        </button>
        <button className="bg-[#232325] rounded-2xl border-1 text-white px-4  hover:bg-[#444445] hover:text-white hover:shadow-lg">
          button
        </button>
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city..."
        className="flex-1 p-2 bg-[#232325] rounded-lg text-white px-4 "
      />
      <button
        onClick={handleSearch}
        className="bg-[#232325] rounded-2xl text-white px-4 border-1 hover:bg-[#444445] hover:text-white hover:shadow-lg "
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
