import React from "react";
import { weatherType } from "../type/types";

interface weatherProps{
  weatherInfor:weatherType
}

const WeatherImage: React.FC<weatherProps> = ({ weatherInfor }) => {
  if (!weatherInfor?.current) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div
        key={weatherInfor.current.condition.text}
        className="flex flex-col items-center p-6 rounded-lg shadow-sm"
      >
        <figure className="w-36 h-36 rounded-full flex items-center justify-center mb-3">
          <img
            src={`https:${weatherInfor.current.condition.icon}`}
            alt={weatherInfor.current.condition.text}
            className="w-24 h-24"
          />
        </figure>
        <p className="text-sm text-white capitalize">
          {weatherInfor.current.condition.text}
        </p>
      </div>
    </div>
  );
};

export default WeatherImage;
