import { useEffect, useState } from "react";
import Header from "./components/Header";
import Name from "./components/Name";
import { fetchWeather } from "./api";
import { weatherType } from "./type/types";
import Infor from "./components/Infor";
import FetchSevenDays from "./components/FetchSevenDays";
import HourlyForecast from "./components/HourlyForecast";

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [weatherInfor, setWeatherInfor] = useState<weatherType | null>(null);

  useEffect(() => {
    const fetchWeatherInfor = async () => {
      if (query.length > 3) {
        const data = await fetchWeather(query.toLocaleLowerCase());
        setWeatherInfor(data);
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
        return "./Clouds.png";
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

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 relative">

      <img
        key={weatherInfor?.location?.name || "default"}
        src={getBackgroundImage(weatherInfor?.current?.condition?.text)}
        alt="Weather Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0 min-h-screen"></div>


      <div className="relative z-10 max-w-[1200px] mx-auto py-[30px]">
        <Header query={query} setQuery={setQuery}></Header>
        {query.length > 3 && weatherInfor && (
          <div className="flex flex-col">
            <div className="w-full flex py-[60px]">
              <Name weatherInfor={weatherInfor} query={query}></Name>
              <Infor weatherInfor={weatherInfor}></Infor>
            </div>
          
          </div>
        )}
      </div>
    </div>
  );
}
