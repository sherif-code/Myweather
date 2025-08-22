const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY; // store your key in .env

export async function fetchWeather(city, units = "metric") {
  try {
    const current = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`
    ).then((res) => res.json());

    const forecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${API_KEY}`
    ).then((res) => res.json());

    if (current.cod !== 200) {
      throw new Error(current.message || "City not found");
    }

    return { current, forecast };
  } catch (error) {
    throw error;
  }
}
