import CurrentLocation from "./CurrentLocation";
import DarkMode from "./DarkMode";
import Search from "./Search";

interface SearchProps {
  query: string;
  setQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const Header: React.FC<SearchProps> = ({ query, setQuery }) => {
  return (
    <div className="flex items-center justify-between">
      <DarkMode></DarkMode>
      <Search query={query} setQuery={setQuery}></Search>
      <CurrentLocation></CurrentLocation>
    </div>
  );
};
export default Header;
