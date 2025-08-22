import useWeatherStore from "../store/WeatherStore";

export default function ForeCast() {
  const { forecast } = useWeatherStore();

  if (!forecast) return null;

  // group forecast data by day
  const daily = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="grid grid-cols-5 gap-2 mt-4">
      {daily.map((day) => (
        <div
          key={day.dt}
          className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900 text-center"
        >
          <p>
            {new Date(day.dt_txt).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </p>
          <p>{Math.round(day.main.temp)}°</p>
          <p>{day.weather[0].main}</p>
        </div>
      ))}
    </div>
  );
}
