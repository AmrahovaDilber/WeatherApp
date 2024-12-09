import { FaLocationDot } from "react-icons/fa6";

const CurrentLocation: React.FC = () => {
  return (
    <div className="flex items-center gap-3 p-1 bg-gray-600  text-white rounded-full shadow-lg hover:shadow-xl transition">
      <div className="w-[40px] h-[40px] flex justify-center items-center bg-blue-600 rounded-full">
        <FaLocationDot className="w-5 h-5 text-white" />
      </div>
      <p className="text-[18px] font-semibold tracking-wide ">Current Location</p>
    </div>
  );
};

export default CurrentLocation;
