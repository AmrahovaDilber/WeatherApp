import { weatherType } from "../type/types";

interface WeatherProps {
    weatherInfor: weatherType;
  }

const WeatherInfor:React.FC<WeatherProps> = ({ weatherInfor }) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
        
    <div className="flex flex-col items-center justify-center p-4 bg-gray-600 rounded-lg shadow-sm">
      <img src="/humidicon.png" alt="Humidity" className="w-8 h-8 mb-2" />
      <p className="text-lg text-white font-medium">
        {weatherInfor?.current?.humidity}%
      </p>
      <p className="text-xs text-gray-400">Humidity</p>
    </div>
    <div className="flex flex-col items-center justify-center p-4 bg-gray-600 rounded-lg shadow-sm">
      <img src="/windicon.png" alt="Wind Speed" className="w-8 h-8 mb-2" />
      <p className="text-lg text-white font-medium">
        {weatherInfor?.current?.wind_kph} km/h
      </p>
      <p className="text-xs text-gray-400">Wind Speed</p>
    </div>
    <div className="flex flex-col items-center justify-center p-4 bg-gray-600 rounded-lg shadow-sm">
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
    <div className="flex flex-col items-center p-4 justify-center bg-gray-600 rounded-lg shadow-sm">
      <img src="/uvicon.png" alt="UV Index" className="w-8 h-8 mb-2" />
      <p className="text-lg text-white font-medium">
        {weatherInfor?.current?.uv}
      </p>
      <p className="text-xs text-gray-400">UV Index</p>
    </div>


  </div>
  )
}

export default WeatherInfor;