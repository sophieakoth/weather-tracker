

function WeatherCard({weather}){

return(
    <>
    <div>
        <h2>{weather.name}</h2>
    </div>
    <div  className="   grid grid-cols-1 sm:grid-cols-2 gap-4  ">
        <div>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png `}alt={weather.weather[0].description}  className="w-16 h-16"/>
        </div>
        <div>
        <p>Temperature</p>
        {Math.round(weather.main.temp)}
        </div>
        <div>
        <p>Humidity</p>
        {weather.main.humidity}
        </div>
         <div>
        <p>Windspeed</p>
        {weather.wind.speed}
        </div>
    </div>
    </>
)



}
export default WeatherCard