import { useEffect, useState } from "react";
import { fetch7DaysWeather } from "../api";
import { ForecastDay } from "../type/types";


interface FetchThreeDayProps {
  query: string;

}
const FetchThreeDays: React.FC<FetchThreeDayProps> = ({ query }) => {
  const [infor, setInfor] = useState<{ forecast: { forecastday: ForecastDay[] } } | null>(null);

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
    <div className="grid grid-cols-1 gap-4 max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[600px] mx-auto backdrop-blur-sm bg-gray-500/40 w-full mr-20 p-4 rounded-lg">
      <p className="text-2xl font-semibold text-center text-white mb-4">
        3 Days Forecast:
      </p>
      {infor?.forecast?.forecastday?.map((item) => (
        <div key={item.date} className="flex items-center justify-between sm:justify-start sm:space-x-10 p-3 bg-gray-700/50 rounded-lg">
          <figure className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
            <img
              src={`https:${item.day.condition.icon}`}
              alt={item.day.condition.text}
              className="w-10 h-10"
            />
          </figure>
          <p className="text-lg text-white font-semibold">{item.day.maxtemp_c}°C</p>
          <p className="text-sm text-gray-300 font-medium">{formatDate(item.date)}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchThreeDays