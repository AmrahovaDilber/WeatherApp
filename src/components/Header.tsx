import CurrentLocation from "./CurrentLocation";
import Search from "./Search";

interface HeaderProps {
  query: string;
  setQuery: (value: string) => void;
  getCurrentLocation: () => void;
  onSearch: () => void; 
}

const Header: React.FC<HeaderProps> = ({
  query,
  setQuery,
  getCurrentLocation,
  onSearch,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-2">
      <p className="text-2xl md:text-3xl font-bold text-white text-center sm:text-start flex-shrink-0">
        Forecastify
      </p>
      <div className="flex-grow max-w-full md:max-w-[50%]">
        <Search query={query} setQuery={setQuery} onSearch={onSearch} />
      </div>
      <div className="flex-shrink-0">
        <CurrentLocation getCurrentLocation={getCurrentLocation} />
      </div>
    </div>
  );
};

export default Header;
