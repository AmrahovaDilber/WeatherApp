import { weatherType } from "../type/types";
import WeatherImage from "./WeatherImage";
import WeatherInfor from "./WeatherInfor";

interface WeatherProps {
  weatherInfor: weatherType;
}

const Infor: React.FC<WeatherProps> = ({ weatherInfor }) => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[800px] h-auto justify-between mx-auto p-8 gap-6 backdrop-blur-sm bg-gray-500/40  text-gray-300 rounded-lg shadow-md">
      <div className="flex flex-col p-6 bg-gray-600 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-white">
          {weatherInfor?.current?.temp_c}°C
        </h2>
        <p className="mt-2 text-md text-gray-400">
          Feels like: {weatherInfor?.current?.feelslike_c}°C
        </p>
        <WeatherImage weatherInfor={weatherInfor}></WeatherImage>
      </div>

<WeatherInfor weatherInfor={weatherInfor}></WeatherInfor>
    </div>
  );
};

export default Infor;
