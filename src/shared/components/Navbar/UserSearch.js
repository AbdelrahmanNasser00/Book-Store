import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";
import "../../CSS/Navbar.css";
import SearchedItems from "./SearchedItems";
import SearchInput from "./SearchInput";

const UserSearch = () => {
  const { books } = useSelector((state) => state.book);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const debouncedSetSearchTerm = useMemo(
    () =>
      debounce((value) => {
        setDebouncedSearchTerm(value);
      }, 500),
    [],
  );

  useEffect(() => {
    debouncedSetSearchTerm(searchTerm);
    return () => {
      debouncedSetSearchTerm.cancel();
    };
  }, [searchTerm, debouncedSetSearchTerm]);

  const filteredBooks = useMemo(() => {
    return books.filter((book) =>
      book.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
    );
  }, [books, debouncedSearchTerm]);

  return (
    <div className="mb-2 flex w-full items-center justify-center lg:mx-3 lg:mb-0 lg:max-w-md">
      <div className="relative w-full">
        <SearchInput handleSearch={handleSearch} />
        {filteredBooks.length > 0 && searchTerm && (
          <SearchedItems filteredBooks={filteredBooks} />
        )}
      </div>
    </div>
  );
};

export default UserSearch;
