import React, { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import "../../CSS/Navbar.css";
import SearchedItems from "./SearchedItems";
import SearchInput from "./SearchInput";
import { useSearchBooksQuery } from "../../../store/ApiSlice";

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading } = useSearchBooksQuery(searchTerm, {
    skip: !searchTerm,
  });
  console.log(data.books);
  const books = data?.books;
  const debouncedHandleSearch = useMemo(
    () =>
      debounce((e) => {
        setSearchTerm(e.target.value);
      }, 800),
    [],
  );

  useEffect(() => {
    return () => debouncedHandleSearch.cancel();
  }, [debouncedHandleSearch]);

  return (
    <div className="mb-2 flex w-full items-center justify-center lg:mx-3 lg:!mb-0 lg:max-w-md">
      <div className="relative w-full">
        <SearchInput handleSearch={debouncedHandleSearch} />
        {books?.length > 0 && searchTerm && <SearchedItems books={books} />}
      </div>
    </div>
  );
};

export default UserSearch;
