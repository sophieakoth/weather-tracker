import { useState } from "react"


function SearchBar({fetchWeather}){

    const [city,setCity]= useState("");



    const handlecity = (e) =>{
        setCity(e.target.value);
    };

    //Preventing default submission
    const handleSubmit = (e)=>{
        e.preventDefault();

        //Calling the trim method to remove spaces
        if(city.trim()){
            fetchWeather(city)
            setCity('');
        }
    }

return(
    <>
    <form  className="flex" onSubmit={handleSubmit}>
        <input type="text" placeholder="City Name" value={city} onChange={handlecity} className="p-2  flex-1 border"/>
        <button type="submit" className="curor-pointer bg-blue-400 border p-2 hover:bg-blue-700" >Search</button>

    </form>

    
    </>
)



}
export default SearchBar