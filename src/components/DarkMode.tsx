import { FaMoon, FaSun } from "react-icons/fa6";

interface DarkModeProps {
  isDarkMode: boolean;
  handleDarkMode: () => void;
}

const DarkMode: React.FC<DarkModeProps> = ({ handleDarkMode, isDarkMode }) => {
  return (
    <button
      className="w-[64px] h-[35px] flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-[2px] transition-all duration-300"
      onClick={handleDarkMode}
      aria-label="Toggle dark mode"
    >
      <span
        className={`w-[26px] h-[26px] flex items-center justify-center bg-white dark:bg-gray-800 text-yellow-500 dark:text-yellow-300 rounded-full shadow-md transform transition-transform duration-300 ${
          isDarkMode ? "translate-x-[30px]" : "translate-x-0"
        }`}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </span>
    </button>
  );
};

export default DarkMode;
