import React, { useMemo, useState } from "react";
import debounce from "lodash.debounce";
import "../../shared/CSS/Navbar.css";
import SearchedItems from "./SearchedItems";
import SearchInput from "./SearchInput";
import { useSearchBooksQuery } from "../../store/ApiSlice";

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isFetching, error } = useSearchBooksQuery(searchTerm, {
    skip: searchTerm.length < 3,
  });

  const debouncedHandleSearch = useMemo(() => {
    return debounce((e) => {
      setSearchTerm(e.target.value);
    }, 500);
  }, []);

  const books = useMemo(() => {
    if (isFetching || error) return [];
    return data?.books || [];
  }, [data, isFetching, error]);

  return (
    <div className="mb-2 flex w-full items-center justify-center lg:mx-3 lg:!mb-0 lg:max-w-xl">
      <div className="relative w-full">
        <SearchInput
          handleSearch={debouncedHandleSearch}
          isFetching={isFetching}
        />
        {!isFetching && searchTerm.length >= 3 && (
          <SearchedItems books={books} />
        )}
      </div>
    </div>
  );
};

export default UserSearch;
