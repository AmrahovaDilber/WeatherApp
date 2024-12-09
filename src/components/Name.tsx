import { weatherType } from "../type/types";

interface WeatherProps {
  weatherInfor: weatherType;
  query: string;
}

const Name: React.FC<WeatherProps> = ({ weatherInfor, query }) => {
  const isWeatherDataAvailable = weatherInfor?.current && weatherInfor?.location;

  return (
    <div className="relative w-full h-full p-4">
      <div className="max-w-full md:max-w-[500px] w-full">
        {isWeatherDataAvailable ? (
          <div className="flex flex-col md:flex-row w-full items-center md:space-x-6 space-y-4 md:space-y-0">
            <p className="text-[48px] md:text-[80px] text-[#fff] font-semibold">
              {weatherInfor.current.temp_c}°C
            </p>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-medium text-[#fff] mb-1">
                {weatherInfor.location.name}
              </h2>
              <p className="text-white text-lg">{weatherInfor.location.localtime}</p>
            </div>
          </div>
        ) : (
          query.trim() === "" && (
            <p className="text-white text-xl md:text-2xl text-center">
              Find your weather type
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Name;
