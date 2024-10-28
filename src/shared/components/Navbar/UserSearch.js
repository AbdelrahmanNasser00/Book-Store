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
    <div className="relative mx-3 w-full max-w-screen-sm">
      <SearchInput handleSearch={handleSearch} />
      {filteredBooks.length > 0 && searchTerm && (
        <SearchedItems filteredBooks={filteredBooks} />
      )}
    </div>
  );
};

export default UserSearch;
