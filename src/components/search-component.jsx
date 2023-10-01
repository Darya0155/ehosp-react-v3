import {
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const SearchComponent = ({placeHolder}) => {
  return (
    <>
      <div className="relative w-full">
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeHolder}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5
         bg-gray-800 hover:bg-gray-500 focus:ring-4 
         focus:outline-none focus:ring-blue-300 font-medium
          rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <MagnifyingGlassIcon className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};
export default SearchComponent;
