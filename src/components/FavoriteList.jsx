import useWeatherStore from "../store/WeatherStore";

export default function FavoriteList() {
  const { favorites, addFavorite, removeFavorite, city } = useWeatherStore();

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">⭐ Favorite Cities</h3>
        {city && (
          <button
            onClick={() => addFavorite(city)}
            className="px-3 py-1 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            + Add {city}
          </button>
        )}
      </div>
      <ul className="space-y-2">
        {favorites.length === 0 && <p>No favorites yet</p>}
        {favorites.map((fav) => (
          <li
            key={fav}
            className="flex justify-between items-center p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            <span>{fav}</span>
            <button
              onClick={() => removeFavorite(fav)}
              className="text-red-500 text-sm"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
