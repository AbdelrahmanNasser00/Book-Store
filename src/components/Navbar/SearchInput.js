import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";

const SearchInput = ({ handleSearch, isFetching }) => {
  return (
    <div className="relative w-full rounded-full transition-all duration-75">
      {!isFetching ? (
        <SearchIcon
          className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500"
          aria-hidden="true"
        />
      ) : (
        <CircularProgress
          size={20}
          className="absolute left-3 top-1/4 -translate-y-1/2 transform text-indigo-600"
        />
      )}

      <input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        className="h-10 w-full rounded-full border border-gray-200 px-10 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-200 focus:!border focus:!border-indigo-600 focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-20"
        aria-label="Search"
      />
    </div>
  );
};

export default SearchInput;
