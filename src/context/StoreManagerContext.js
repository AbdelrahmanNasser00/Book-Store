import React, { createContext, useState } from "react";

export const StoreManagerContext = createContext();

export const StoreManagerContextProvider = ({ children }) => {
  const [isAddBookVisible, setIsAddBookVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [bookToCatalog, setBookToCatalog] = useState(null);
  const [editBook, setEditBook] = useState(null);

  const toggleAddBookVisibility = () => {
    setIsAddBookVisible(!isAddBookVisible);
    setIsSearchVisible(false);
    setBookToCatalog(null);
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
    setIsAddBookVisible(false);
  };

  const setCatalogBook = (book) => {
    setBookToCatalog(book);
    setIsAddBookVisible(true);
    setIsSearchVisible(false);
  };
  const setEditBookForm = (book) => {
    setEditBook(book);
    setIsAddBookVisible(true);
    setIsSearchVisible(false);
    setBookToCatalog(null);
  };

  return (
    <StoreManagerContext.Provider
      value={{
        isAddBookVisible,
        isSearchVisible,
        bookToCatalog,
        toggleAddBookVisibility,
        toggleSearchVisibility,
        setCatalogBook,
        editBook,
        setEditBook,
        setEditBookForm,
      }}>
      {children}
    </StoreManagerContext.Provider>
  );
};
