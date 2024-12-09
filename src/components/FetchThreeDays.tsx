import { useEffect, useState } from "react";
import { fetch7DaysWeather } from "../api";
import { ForecastDay } from "../type/types";


interface FetchSevenDaysProps {
  query: string;

}

const FetchThreeDays: React.FC<FetchSevenDaysProps> = ({query}) => {
  const [infor, setInfor] = useState<{forecast: { forecastday: ForecastDay[] }} | null>(null);


  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      day: "numeric",
      month: "short",
    }).format(date);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await fetch7DaysWeather(query);
        setInfor(data);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };

    if (query) {
      fetchWeather();
    }
  }, [query]);

  return (
    <div className="grid grid-cols-1  max-w-[40%] backdrop-blur-sm bg-gray-500/40 w-full p-3 rounded-lg">
      <p className="text-[32px] font-semibold  text-center  text-[#fff]">
        3 Days Forecast:
      </p>
      {infor?.forecast?.forecastday?.map((item) => (
        <div key={item.date} className="flex items-center space-x-[30px]  ">
          <figure className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mb-3">
            <img
              src={`https:${item.day.condition.icon}`}
              alt={item.day.condition.text}
              className="w-10 h-10"
            />
          </figure>
          <p className="text-[24px] text-[#fff] font-semibold">
            {item.day.maxtemp_c}°C
          </p>
          <p className="text-white font-semibold">{formatDate(item.date)}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchThreeDays;
