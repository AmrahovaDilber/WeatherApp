import { IoSearch } from "react-icons/io5";

interface SearchProps {
  query: string;
  setQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ query, setQuery }) => {
  return (
    <div className="flex items-center gap-3 w-full max-w-[800px] border rounded-[40px] border-gray-300 bg-white">
      <div className="w-[40px] h-[40px] flex justify-center items-center text-gray-500">
        <IoSearch className="w-6 h-6" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" text-gray-600 font-medium text-[16px] flex-grow placeholder-gray-400 outline-none border-none"
        placeholder="Search for your preferred city..."
      />
    </div>
  );
};

export default Search;
