import { weatherType } from "../type/types";

interface WeatherProps {
  weatherInfor: weatherType;
  query: string;
}

const Name: React.FC<WeatherProps> = ({ weatherInfor, query }) => {
  const isWeatherDataAvailable = weatherInfor?.current && weatherInfor?.location;

  return (
    <div className="relative w-full h-full ">
      <div className=" p-6 max-w-[500px] w-full">
        {isWeatherDataAvailable ? (
          <div className="flex w-full items-center space-x-6">
            <p className="text-[80px] text-[#fff] font-semibold">
              {weatherInfor.current.temp_c}°C
            </p>
            <div>
              <h2 className="text-3xl font-medium text-[#fff] mb-1">
                {weatherInfor.location.name}
              </h2>
              <p className="text-white text-lg">
                {weatherInfor.location.localtime}
              </p>
            </div>
          </div>
        ) : (
          query.trim() === "" && (
            <p className="text-white text-2xl text-center">
              Find your weather type
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Name;
