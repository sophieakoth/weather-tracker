

function WeatherCard({weather}){

return(
    <>
    <div>
        <h2>{weather.name}</h2>
    </div>
    <div>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png `}alt={weather.weather[0].description}  className="w-16 h-16"/>
        <p>Temperature</p>
        {Math.round(weather.main.temp)}
        <p>Humidity</p>
        {weather.main.humidity}
        <p>Windspeed</p>
        {weather.wind.speed}
    </div>
    </>
)



}
export default WeatherCard