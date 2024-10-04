import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import axios from "axios";
import Pagination from "../../shared/components/Pagination";
import ProductCard from "../../shared/components/ProductCard";
import ProductPage from "./ProductPage";

const BooksCardsContainer = () => {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    // https://api.itbook.store/1.0/new
    axios
      .get("http://localhost:8080/api/books")
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
    <MDBContainer className="my-5 mx-auto max-w-[1200px]">
      <MDBRow className="d-flex justify-content-center">
        {books.map((book) => (
          <MDBCol md="4" lg="3" className="mb-4" key={book.id}>
            <BookCard book={book} />
          </MDBCol>
        ))}
      </MDBRow>
      <Pagination />
    </MDBContainer>
  );
};

export default BooksCardsContainer;
