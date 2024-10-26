import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import BookCard from "../Books/BookCard";
import { Pagination } from "@mui/material";
import { WishlistContext } from "../../context/WishlistContext";

const WishlistContainer = () => {
  const { favoriteBooks } = useContext(WishlistContext);
  return (
    <MDBContainer className="my-5 mx-auto max-w-[1200px]">
      <MDBRow className="flex justify-content-center">
        {favoriteBooks.map((book) => (
          <BookCard book={book} key={book._id} />
        ))}
      </MDBRow>
      <Pagination />
    </MDBContainer>
  );
};

export default WishlistContainer;
