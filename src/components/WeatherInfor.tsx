import { weatherType } from "../type/types";

interface WeatherProps {
  weatherInfor: weatherType;
}

const WeatherInfor: React.FC<WeatherProps> = ({ weatherInfor }) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      
      {/* Humidity */}
      <div className="flex flex-col items-center justify-center p-4 bg-gray-700 dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg">
        <img src="/humidicon.png" alt="Humidity" className="w-8 h-8 mb-2" />
        <p className="text-lg text-white font-medium">
          {weatherInfor?.current?.humidity}%
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-300">Humidity</p>
      </div>
      
      {/* Wind Speed */}
      <div className="flex flex-col items-center justify-center p-4 bg-gray-700 dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg">
        <img src="/windicon.png" alt="Wind Speed" className="w-8 h-8 mb-2" />
        <p className="text-lg text-white font-medium">
          {weatherInfor?.current?.wind_kph} km/h
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-300">Wind Speed</p>
      </div>
      
      {/* Pressure */}
      <div className="flex flex-col items-center justify-center p-4 bg-gray-700 dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg">
        <img
          src="/pressureicon.png"
          alt="Pressure"
          className="w-8 h-8 mb-2"
        />
        <p className="text-lg text-white font-medium">
          {weatherInfor?.current?.pressure_mb} hPa
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-300">Pressure</p>
      </div>
      
      {/* UV Index */}
      <div className="flex flex-col items-center justify-center p-4 bg-gray-700 dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg">
        <img src="/uvicon.png" alt="UV Index" className="w-8 h-8 mb-2" />
        <p className="text-lg text-white font-medium">
          {weatherInfor?.current?.uv}
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-300">UV Index</p>
      </div>

    </div>
  );
}

export default WeatherInfor;
