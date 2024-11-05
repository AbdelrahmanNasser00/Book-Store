import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import BookCard from "../Books/BookCard";
import { Pagination } from "@mui/material";
import { WishlistContext } from "../../context/WishlistContext";
import { fetchWishlist } from "../../api";
import { AuthContext } from "../../context/AuthContext";

const WishlistContainer = () => {
  const { currentUser } = useContext(AuthContext);
  const { favoriteBooks } = useContext(WishlistContext);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const getWishlist = async () => {
      const res = await fetchWishlist();
      console.log(res);
      if (!res.error && res.status >= 200 && res.status < 300) {
        setWishlist(res.data.wishlist);
      } else {
        alert("Failed to get");
        console.error(res.ex);
      }
    };
    getWishlist();
  }, []);
  return (
    <div className="container my-5">
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {wishlist.map((book) => (
          <div key={book.bookId} className="flex justify-center">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistContainer;
