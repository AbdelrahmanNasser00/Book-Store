import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ handleSearch }) => {
  return (
    <div className="relative w-full rounded-full transition-all duration-75">
      <SearchIcon
        className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500"
        aria-hidden="true"
      />
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        className="h-12 w-full rounded-full border-2 border-gray-200 px-10 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-200 focus:border-sky-700 focus:ring-4 focus:ring-sky-700 focus:ring-opacity-20"
        aria-label="Search"
      />
    </div>
  );
};

export default SearchInput;
