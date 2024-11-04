import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import BookCard from "../Books/BookCard";
import { Pagination } from "@mui/material";
import { WishlistContext } from "../../context/WishlistContext";

const WishlistContainer = () => {
  const { favoriteBooks } = useContext(WishlistContext);
  return (
    <MDBContainer className="mx-auto my-5 max-w-[1200px]">
      <MDBRow className="justify-content-center flex">
        {favoriteBooks.map((book) => (
          <BookCard book={book} key={book.bookId} />
        ))}
      </MDBRow>
      <Pagination />
    </MDBContainer>
  );
};

export default WishlistContainer;
