import React, { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import "../../shared/CSS/Navbar.css";
import SearchedItems from "./SearchedItems";
import SearchInput from "./SearchInput";
import { useSearchBooksQuery } from "../../store/ApiSlice";

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading } = useSearchBooksQuery(searchTerm, {
    skip: searchTerm.length < 3,
  });
  const [books, setBooks] = useState([]);
  console.log(data?.books);
  const debouncedHandleSearch = useMemo(
    () =>
      debounce((e) => {
        setBooks([]);
        setSearchTerm(e.target.value);
      }, 800),
    [],
  );

  useEffect(() => {
    if (data?.books) setBooks(data.books);
    return () => debouncedHandleSearch.cancel();
  }, [debouncedHandleSearch, data]);

  return (
    <div className="mb-2 flex w-full items-center justify-center lg:mx-3 lg:!mb-0 lg:max-w-md">
      <div className="relative w-full">
        <SearchInput handleSearch={debouncedHandleSearch} />
        {!isLoading && !error && searchTerm.length >= 3 && (
          <SearchedItems books={books} />
        )}
      </div>
    </div>
  );
};

export default UserSearch;
