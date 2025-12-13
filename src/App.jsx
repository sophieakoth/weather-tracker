import SearchBar from "./components/SearchBar"
import {useState} from 'react';
import axios from "axios";
import WeatherCard from "./components/WeatherCard";

function App() {
  const[weather,setWeather] =useState(null);
  const[error,setError]  = useState("");
  const[loading,setLoading] = useState(false);
  
 const API_KEY = import.meta.env.VITE_API_KEY;
 const API_URL = "https://api.openweathermap.org/data/2.5/weather";

 //Function that fetches weather
 const fetchWeather = async (city) =>{
setLoading(true);
setError('');
try {
  const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
  const response = await axios.get(url);
  console.log(response.data);
  setWeather(response.data);
}catch(err){
  if(err.response && err.response.status === 404){
    setError("City not found.Try again");
  }else{
    setError("An error occured.Try again later");
  }
  setWeather(null);
}

 }

  

  return (
    <>
     
     <div className="min-h-screen flex flex-col items-center justify-center bg-amber-200">

      <div className="bg-black text-white rounded-lg  shadow-lg p-8 max-w-md w-full" >
      <h1 className="font-bold mb-4" >Weather App</h1>
      <SearchBar fetchWeather={fetchWeather}/>
    
      {weather && <WeatherCard  weather={weather}/> }

      </div>
        
      </div>
     
      
    </>
  )
}

export default App
