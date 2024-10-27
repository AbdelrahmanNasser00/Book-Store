import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const UserSearch = () => {
  return (
    <div className="relative mx-3 w-full max-w-md">
      <input
        type="text"
        placeholder="Search for products"
        className="w-full rounded-full border border-gray-300 bg-white px-4 py-2 pl-4 pr-10 text-gray-700 placeholder-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
        aria-label="Search"
      />
      <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
    </div>
  );
};

export default UserSearch;
