import React, { createContext, useState } from "react";

export const WishlistContext = createContext();
export const WishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addBookToFavorites = (book) => {
    setWishlist((prevBook) => [...prevBook, book]);
  };
  const removeBookFromFavorites = (book) => {
    setWishlist((prevBook) =>
      prevBook.filter((book) => book.bookId !== prevBook.bookId),
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addBookToFavorites, removeBookFromFavorites }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
