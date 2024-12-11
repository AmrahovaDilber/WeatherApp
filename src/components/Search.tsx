import { IoSearch } from "react-icons/io5";

interface SearchProps {
  query: string;
  setQuery: (value: string) => void;
  onSearch: () => void; 
}

const Search: React.FC<SearchProps> = ({ query, setQuery, onSearch }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(); 
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 w-full max-w-[600px] border rounded-[40px] border-gray-300 dark:border-none bg-white dark:bg-gray-800"
    >
      <button
        type="submit"
        className=" w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] ml-2 flex justify-center items-center text-gray-500"
        aria-label="Search"
      >
        <IoSearch className="w-6 h-6" />
      </button>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-gray-600 font-medium text-[16px] w-[230px] sm:w-[480px] dark:bg-gray-800 placeholder-gray-400 outline-none border-none"
        placeholder="Search for your preferred city..."
      />
    </form>
  );
};

export default Search;
