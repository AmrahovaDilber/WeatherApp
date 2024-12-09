import { useEffect, useState } from "react";
import { fetchHourlyForecast } from "../api";
import { hourlyForecastType } from "../type/types";

interface queryProps{
    query:string
}

const HourlyForecast: React.FC<queryProps> = ({ query }) => {
  const [hourForecast, setHourForecast] = useState<hourlyForecastType | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;
      const data = await fetchHourlyForecast(query);
      setHourForecast(data);
    };
    fetchData();
  }, [query]);

  return (
    <div className="max-w-[51%] w-full backdrop-blur-sm bg-gray-500/40 p-3 h-[400px] overflow-y-auto rounded-lg">
      <h2 className="text-[32px] font-semibold  text-center mb-3 text-[#fff]">
        Hourly Forecast
      </h2>
      {hourForecast?.forecast.forecastday.map((item) =>
        item.hour.map((it, index) => (
          <div
            key={`${item.date}-${index}`}
            className="grid grid-cols-5 gap-4 items-center text-white py-2 border-b border-gray-600"
          >
            <p className="col-span-1">
              {new Date(it.time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <figure className="col-span-1 flex justify-center">
              <img
                src={`https:${it.condition.icon}`}
                alt={it.condition.text}
                className="w-8 h-8"
              />
            </figure>
            <p className="col-span-1">{it.temp_c}°C</p>
            <p className="col-span-1">{it.humidity}%</p>
          </div>
        ))
      )}
    </div>
  );
};

export default HourlyForecast;
