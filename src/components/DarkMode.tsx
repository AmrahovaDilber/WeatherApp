// import { FaSun } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";

const DarkMode: React.FC = () => {
  return (
    <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-lg shadow-sm">
      {/* <button className="p-2 bg-yellow-400 rounded-full text-white shadow-md hover:bg-yellow-500 transition">
        <FaSun className="w-5 h-5" />
      </button> */}
      <button className="p-1 bg-gray-700 rounded-full text-white shadow-md hover:bg-gray-800 transition">
        <IoMoon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default DarkMode;
