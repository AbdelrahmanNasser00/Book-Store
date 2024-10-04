import React from "react";
const HomeSearch = () => {
  return (
    <div className="input-group rounded w-auto">
      <input
        type="search"
        className="form-control rounded w-full"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span className="input-group-text border-0" id="search-addon">
        <i className="fas fa-search" />
      </span>
    </div>
  );
};

export default HomeSearch;
