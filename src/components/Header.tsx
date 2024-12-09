
import CurrentLocation from "./CurrentLocation";

import Search from "./Search";

interface SearchProps {
  query: string;
  setQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getCurrentLocation:()=>void
}

const Header: React.FC<SearchProps> = ({ query, setQuery,getCurrentLocation }) => {
  return (
    <div className="flex items-center justify-between ">
    {/* Logo and Weather Icon */}

      <p className="text-3xl font-bold text-white">Forecastify</p> 


    {/* Search and Current Location */}
 
      <Search query={query} setQuery={setQuery} />
      <CurrentLocation getCurrentLocation={getCurrentLocation} />
   
  </div>
  );
};
export default Header;
