import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import axios from "axios";

const BooksCardsContainer = () => {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.itbook.store/1.0/new")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data.books);
      })
      .catch((err) => {
        console.error("Error fetching book data:", err);
      });
  }, []);

  if (!books) {
    return <p>Loading...</p>;
  }

  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="d-flex justify-content-center">
        {books.map((book) => (
          <MDBCol md="4" lg="2" className="mb-4" key={book.id}>
            <BookCard book={book} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default BooksCardsContainer;
