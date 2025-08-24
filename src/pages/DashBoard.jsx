import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForeCast from "../components/ForeCast";
import UnitToggle from "../components/UnitToggle";
import FavoriteList from "../components/FavoriteList";

 function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-black">
      <h1 className="text-3xl font-bold mb-6 text-center" >SkyCast</h1>
      <SearchBar />
      <UnitToggle />
      <WeatherCard />
      <ForeCast />
      <FavoriteList />
    </div>
  );
}


export default Dashboard