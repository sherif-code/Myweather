import useWeatherStore from "../store/WeatherStore";

export default function FavoriteList() {
  const { favorites, addFavorite, removeFavorite, city } = useWeatherStore();

  const isFavorite = city && favorites.includes(city);

  return (
    <div className="flex mt-6 flex-col bg-black p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold items-center justify-center">
          Favorite Cities
        </h3>
        {city && (
          <button
            onClick={() => addFavorite(city)}
            className="px-3 py-1 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black disabled:opacity-50"
            disabled={isFavorite}
            title={
              isFavorite
                ? `${city} is already a favorite`
                : `Add ${city} to favorites`
            }
          >
            + Add {city}
          </button>
        )}
      </div>
      <ul className="space-y-2">
        {favorites.length === 0 && (
          <li className="text-gray-500">No favorites yet</li>
        )}
        {favorites.map((fav) => (
          <li
            key={fav}
            className="flex justify-between items-center p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            <span>{fav}</span>
            <button
              onClick={() => removeFavorite(fav)}
              className="text-red-500 text-sm"
              aria-label={`Remove ${fav} from favorites`}
              title={`Remove ${fav}`}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
