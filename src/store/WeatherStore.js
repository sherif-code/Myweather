import { create } from "zustand";
import { fetchWeather } from "../unit/fetchWeather";

const useWeatherStore = create((set) => ({
  city: "",
  weather: null,
  forecast: null,
  unit: "metric", // "metric" = °C, "imperial" = °F
  favorites: [],
  error: null,
  loading: false,

  setCity: (city) => set({ city }),

  getWeather: async (city) => {
    set({ loading: true, error: null });
    try {
      const data = await fetchWeather(city);
      set({
        city,
        weather: data.current,
        forecast: data.forecast,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  toggleUnit: () =>
    set((state) => ({ unit: state.unit === "metric" ? "imperial" : "metric" })),

  addFavorite: (city) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, city])],
    })),

  removeFavorite: (city) =>
    set((state) => ({
      favorites: state.favorites.filter((c) => c !== city),
    })),
}));

export default useWeatherStore;
