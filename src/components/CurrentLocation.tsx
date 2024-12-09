import { FaLocationDot } from "react-icons/fa6";

interface currentlocationProps{
  getCurrentLocation:()=>void
}

const CurrentLocation: React.FC<currentlocationProps> = ({ getCurrentLocation }) => {
  return (
    <div>
      <div
        onClick={getCurrentLocation}
        className="flex items-center gap-3 p-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <div className="w-[34px] h-[34px] flex justify-center items-center bg-white rounded-full shadow-lg">
          <FaLocationDot className="w-6 h-6 text-blue-600" />
        </div>

        <p className="text-[18px] font-semibold tracking-wide text-white">
          Current Location
        </p>
      </div>

    
    </div>
  );
};

export default CurrentLocation;
