import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import axios from "axios";
import Pagination from "../../shared/components/Pagination";
import ProductCard from "../../shared/components/ProductCard";
import ProductPage from "./ProductPage";
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../../store/BookSlice";
import { fetchBooks } from "../../api";

const BooksCardsContainer = () => {
  const [books, setBooks] = useState(null);
  const dispatch = useDispatch();
  console.log(books);

  useEffect(() => {
    // https://api.itbook.store/1.0/new
    const getBooks = async () => {
      try {
        const res = await fetchBooks();
        if (res.err) {
          console.error(res.err);
        } else {
          dispatch(loadBooks(res.data.books));
          setBooks(res.data.books);
        }
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };
    getBooks();
  }, []);

  if (!books) {
    return <p>Loading...</p>;
  }

  return (
    <MDBContainer className="my-5 mx-auto max-w-[1200px]">
      <MDBRow className="d-flex justify-content-center">
        {books.map((book) => (
          <MDBCol md="4" lg="3" className="mb-4" key={book._id}>
            <BookCard book={book} />
          </MDBCol>
        ))}
      </MDBRow>
      <Pagination />
    </MDBContainer>
  );
};

export default BooksCardsContainer;
