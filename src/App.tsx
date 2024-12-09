import { useEffect, useState } from "react";
import Header from "./components/Header";
import Name from "./components/Name";
import { fetchCurrentLocationWeather, fetchWeather } from "./api";
import { weatherType } from "./type/types";
import Infor from "./components/Infor";
import HourlyForecast from "./components/HourlyForecast";
import FetchThreeDays from "./components/FetchThreeDays";

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [weatherInfor, setWeatherInfor] = useState<weatherType | null>(null);
  const [currentPosition,setCurrentPosition]=useState<boolean>(false)
  useEffect(() => {
    const fetchWeatherInfor = async () => {
      if (query.length > 3) {
        const data = await fetchWeather(query.toLocaleLowerCase());
        setWeatherInfor(data);
        setCurrentPosition(false)
      } else {
        setWeatherInfor(null); 
      }
    };

    fetchWeatherInfor();
  }, [query]);

  const getBackgroundImage = (weatherCondition?: string): string => {
    if (!weatherCondition) return "./bg2.jpeg"; 
    switch (weatherCondition) {
      case "Overcast":
        return "./overcast.jpg";
      case "Partly cloudy":
        return "./cloudy.jpeg";
      case "Sunny":
        return "./sunny.jpg";
      case "Clear":
        return "./Clear.png";
      case "Light rain":
        return "./Rain.png";
      case "Light snow":
        return "./Snow.jpeg";
      case "Drizzle":
        return "./Drizzle.png";
      case "Thunderstorm":
        return "./Thunderstorm.png";
      default:
        return "./bg2.jpeg";
    }
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const data = await fetchCurrentLocationWeather(latitude, longitude);
        if (data) {
          setWeatherInfor(data);
          setCurrentPosition(true)
        } else {
          console.error("Failed to fetch weather data for current location");
        }
      },
      (error) => {
        console.log("Geolocation error:", error);
      }
    );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r  from-purple-500 to-blue-500 dark:bg-gray-800 relative">
      <img
        key={weatherInfor?.location?.name || "default"}
        src={getBackgroundImage(weatherInfor?.current?.condition?.text)}
        alt="Weather Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0 min-h-screen"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto py-8 px-4">
  <Header query={query} setQuery={setQuery} getCurrentLocation={getCurrentLocation} />
  {weatherInfor ? (
    <div className="flex flex-col space-y-8">
      <div className="w-full flex flex-col md:flex-row items-center md:items-start py-8 space-y-8 md:space-y-0 md:space-x-8">
        <Name weatherInfor={weatherInfor} query={query} />
        <Infor weatherInfor={weatherInfor} />
      </div>
      {!currentPosition && (
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 ">
          <FetchThreeDays query={query} weatherInfor={weatherInfor} />
          <HourlyForecast query={query} />
        </div>
      )}
    </div>
  ) : (
    <div className="text-center shadow-lg text-white h-screen font-semibold text-lg md:text-xl lg:text-2xl flex justify-center items-center">
      Please enter a city or use the current location button to get weather data.
    </div>
  )}
</div>

    </div>
  );
}
