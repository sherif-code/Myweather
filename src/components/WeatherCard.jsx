// Import weather state from the store
import useWeatherStore from "../store/WeatherStore";
// Import images for card backgrounds
import picture from "../images/weather.png";
import CloudPicture from "../images/clound.jpg";

function WeatherCard() {
  // Get weather, city, loading, and error state from the store
  const { weather, city, loading, error } = useWeatherStore();

  // Show loading message while fetching data
  if (loading) return <p aria-live="polite">Loading weather...</p>;

  // Show error message if there is an error
  if (error)
    return (
      <p className="text-red-500 flex text-center justify-center font-bold" role="alert">
        {error}
      </p>
    );

  // If no weather data is available, render nothing
  if (!weather) return null;

  // Render the weather card with current weather details
  return (
    <div
      className="p-4 rounded-2xl mb-4 bg-cover bg-center h-100 shadow-xl"
      style={{ backgroundImage: `url(${picture})` }}
    >
      {/* Card title */}
      <h2 className="text-xl font-semibold mb-2 text-center bg-[#2a5ed946] ml-100 mr-100 rounded-2xl p-2 text-shadow-white">
        Current Weather
      </h2>

      {/* City name */}
      <p
        className="font-bold px-18 mb-10 text-2xl text-black"
        aria-label="City"
      >
        {city}
      </p>

      {/* Weather details grid */}
      <div className="flex grid-cols-4 gap-5 justify-center">
        {/* Temperature card with cloud background */}
        <div
          className="bg-blue-500 h-30 p-2 w-[20%] rounded-2xl text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${CloudPicture})` }}
        >
          <p aria-label="Temperature">Temp: {Math.round(weather.main.temp)}°</p>
        </div>

        {/* Humidity card */}
        <div className="bg-blue-500 h-30 p-2 w-[20%] rounded-2xl text-center">
          <p aria-label="Humidity">Humidity: {weather.main.humidity}%</p>
        </div>

        {/* Wind speed card */}
        <div className="bg-blue-500 h-30 p-2 w-[20%] rounded-2xl text-center">
          <p aria-label="Wind">
            Wind:
            <br />
            {weather.wind.speed} m/s
          </p>
        </div>

        {/* Weather condition card */}
        <div className="bg-[#2a5fd990] h-30 p-2 rounded-2xl w-[20%] text-center">
          <p aria-label="Condition">
            Condition:
            <br />
            {weather.weather[0].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
