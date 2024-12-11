import { FaLocationDot } from "react-icons/fa6";

interface currentlocationProps{
  getCurrentLocation:()=>void
}

const CurrentLocation: React.FC<currentlocationProps> = ({ getCurrentLocation }) => {
  return (
    <div>
      <div
        onClick={getCurrentLocation}
        className="flex items-center cursor-pointer gap-1 sm:gap-3 p-1  bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <div className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] flex justify-center items-center bg-white rounded-full shadow-lg">
          <FaLocationDot className="h-5 w-5 sm:w-5 sm:h-5 text-blue-600" />
        </div>

        <p className="text-[15px] sm:text-[18px] font-semibold tracking-wide text-white">
          Current Location
        </p>
      </div>

    
    </div>
  );
};

export default CurrentLocation;
