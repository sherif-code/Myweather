function WeatherCard({city, country}){

	return( <div className="bg-blue-500 text-white font-bold rounded m-20 p-50 w-150" >
		<h1>{country}</h1>
		<p>{city}</p>
	</div>);
}

export default WeatherCard