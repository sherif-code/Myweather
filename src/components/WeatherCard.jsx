//imports stae from the (weather data ) from the store
import useWeatherStore from "../store/WeatherStore";
//import images from the images to be useed in my card
import picture from "../images/weather.png";
import CloudPicture from "../images/clound.jpg";

function WeatherCard() {
  //// Destructure weather data and status values from the store
  const { weather, city, loading, error } = useWeatherStore();

  // If still fetching weather, show loading message
  if (loading) return <p> Loading weather...</p>;

  // If there's an error (like invalid city), show error message in red
  if (error) return <p className="text-red-500"> {error}</p>;

  //if no weather data available yet show nothing !
  if (!weather) return null;

  return (
    /*
		Note: weather card needds to be reseted back to it snormal formart before i added the black background colrs and borders
		*/
    <div
      className="p-4 rounded-2xl mb-4 bg-cover bg-center h-100 shadow-xl"
      style={{ backgroundImage: `url(${picture})` }}
    >
      <h2 className="text-xl font-semibold mb-2 text-center bg-[#2a5ed946]  ml-100 mr-100 rounded-2xl p-2 text-shadow-white">
        Current Weather
      </h2>

      <p className="text-lg text-center mb-10">{city}</p>

      <div className="flex grid-cols-4 gap-5 justify-center">
        <div
          className="bg-blue-500 h-30 p-2  w-[20%] rounded-2xl text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${CloudPicture})` }}
        >
          <p>Temp: {Math.round(weather.main.temp)}°</p>
        </div>

        <div className="bg-blue-500 h-30 p-2 w-[20%] rounded-2xl text-center">
          <p> Humidity: {weather.main.humidity}%</p>
        </div>

        <div className="bg-blue-500 h-30 p-2 w-[20%] rounded-2xl text-center ">
          <p>
            Wind:<br></br>
            {weather.wind.speed} m/s
          </p>
        </div>

        <div className=" bg-[#2a5fd990]  h-30 p-2 rounded-2xl w-[20%] text-center">
          <p>
            {" "}
            Condition: <br></br>
            {weather.weather[0].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
