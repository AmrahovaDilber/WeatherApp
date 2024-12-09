import { weatherType } from "../type/types";
import WeatherImage from "./WeatherImage";

interface WeatherProps {
  weatherInfor: weatherType;
}

const Infor: React.FC<WeatherProps> = ({ weatherInfor }) => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[800px] h-auto justify-between mx-auto p-8 gap-6 backdrop-blur-sm bg-gray-500/40  text-gray-300 rounded-lg shadow-md">
      <div className="flex flex-col p-6 bg-gray-700 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-white">
          {weatherInfor?.current?.temp_c}°C
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Feels like: {weatherInfor?.current?.feelslike_c}°C
        </p>
        <WeatherImage weatherInfor={weatherInfor}></WeatherImage>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded-lg shadow-sm">
          <img src="/humidicon.png" alt="Humidity" className="w-8 h-8 mb-2" />
          <p className="text-lg text-white font-medium">
            {weatherInfor?.current?.humidity}%
          </p>
          <p className="text-xs text-gray-400">Humidity</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded-lg shadow-sm">
          <img src="/windicon.png" alt="Wind Speed" className="w-8 h-8 mb-2" />
          <p className="text-lg text-white font-medium">
            {weatherInfor?.current?.wind_kph} km/h
          </p>
          <p className="text-xs text-gray-400">Wind Speed</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded-lg shadow-sm">
          <img
            src="/pressureicon.png"
            alt="Pressure"
            className="w-8 h-8 mb-2"
          />
          <p className="text-lg text-white font-medium">
            {weatherInfor?.current?.pressure_mb} hPa
          </p>
          <p className="text-xs text-gray-400">Pressure</p>
        </div>
        <div className="flex flex-col items-center p-4 justify-center bg-gray-700 rounded-lg shadow-sm">
          <img src="/uvicon.png" alt="UV Index" className="w-8 h-8 mb-2" />
          <p className="text-lg text-white font-medium">
            {weatherInfor?.current?.uv}
          </p>
          <p className="text-xs text-gray-400">UV Index</p>
        </div>
      </div>
    </div>
  );
};

export default Infor;
