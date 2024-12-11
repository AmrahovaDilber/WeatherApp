import { useEffect, useState } from "react";
import Header from "./components/Header";
import { fetchCurrentLocationWeather, fetchWeather } from "./api";
import { weatherType } from "./type/types";
import Name from "./components/Name";
import Infor from "./components/Infor";
import HourlyForecast from "./components/HourlyForecast";
import FetchThreeDays from "./components/FetchThreeDays";

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [weatherInfor, setWeatherInfor] = useState<weatherType | null>(null);
  const [currentPosition, setCurrentPosition] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  useEffect(() => {
    const fetchWeatherInfor = async () => {
      if (query.length >= 3) {
        const data = await fetchWeather(query.toLowerCase());
        setWeatherInfor(data);
        setCurrentPosition(false);
      } else {
        setWeatherInfor(null);
      }
    };

    fetchWeatherInfor();
  }, [query]);

  const getBackgroundImage = (weatherCondition?: string): string => {
    if (!weatherCondition) return "./bg2.jpeg";
    switch (weatherCondition.toLowerCase()) {
      case "Overcast".toLowerCase():
        return "./partlycloud.jpg";
      case "Partly Cloudy".toLowerCase():
        return "./partcloud.jpeg";
      case "Cloudy".toLowerCase():
        return "./partlycloud.jpg";
      case "Sunny".toLowerCase():
        return "./sunny.jpg";
      case "Clear".toLowerCase():
        return "./Clear.png";
      case "Light rain".toLowerCase():
        return "./Rain.png";
      case "Light snow".toLowerCase():
        return "./Snow.jpeg";
      case "Drizzle".toLowerCase():
        return "./Drizzle.png";
      case "Thunderstorm".toLowerCase():
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
          setCurrentPosition(true);
        } else {
          console.error("Failed to fetch weather data for current location");
        }
      },
      (error) => {
        console.log("Geolocation error:", error);
      }
    );
  };

  const handleSearch = () => {
    if (searchInput.trim() === "") {
      setQuery("");
      setWeatherInfor(null);
    } else {
      setQuery(searchInput);
    }
  };

  function handleDarkMode() {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      localStorage.setItem("darkMode", "false");
    } else {
      localStorage.setItem("darkMode", "true");
    }
  }
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    setIsDarkMode(savedDarkMode);
    if (savedDarkMode === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div
      className={`w-full min-h-screen relative ${
        isDarkMode
          ? "bg-[#121212]"
          : "bg-gradient-to-r from-purple-500 to-blue-500"
      }`}
    >
      {isDarkMode ? (
        <div className="w-full h-full"></div>
      ) : (
        <img
          key={weatherInfor?.location?.name || "default"}
          src={getBackgroundImage(weatherInfor?.current?.condition?.text)}
          alt="Weather Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      )}

      <div className="absolute inset-0 bg-black bg-opacity-40 z-0 min-h-screen"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto py-8 px-4">
        <Header
          query={searchInput}
          setQuery={setSearchInput}
          onSearch={handleSearch}
          handleDarkMode={handleDarkMode}
          getCurrentLocation={getCurrentLocation}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        {weatherInfor ? (
          <div className="flex flex-col space-y-8">
            <div className="w-full flex flex-col md:flex-row items-center md:items-start py-8 space-y-8 md:space-y-0 md:space-x-8">
              <Name weatherInfor={weatherInfor} query={query} />
              <Infor weatherInfor={weatherInfor} />
            </div>
            {!currentPosition && (
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0">
                <FetchThreeDays query={query} />
                <HourlyForecast query={query} />
              </div>
            )}
          </div>
        ) : (
          <div className="text-center shadow-lg text-white h-full font-semibold text-lg md:text-xl lg:text-2xl flex justify-center items-center mt-[250px]">
            Please enter a city or use the current location button to get
            weather data.
          </div>
        )}
      </div>
    </div>
  );
}
