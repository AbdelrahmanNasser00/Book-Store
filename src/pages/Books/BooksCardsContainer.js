import React, { useContext, useEffect, useState } from "react";
import BookCard from "./BookCard";
import Pagination from "../../shared/components/Pagination";
import { useDispatch } from "react-redux";
import { loadBooks } from "../../store/BookSlice";
import { fetchBooks, fetchCart } from "../../api";
import BookCardSkeleton from "../../shared/components/BookCardSkeleton";
import { updateCart } from "../../store/CartSlice";
import { AuthContext } from "../../context/AuthContext";

const BooksCardsContainer = () => {
  const [books, setBooks] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetchBooks();
        console.log(res);
        if (res.err) {
          console.error(res.err);
        } else {
          dispatch(loadBooks(res.data.books));
          setBooks(res.data.books);
          if (currentUser !== "guest") {
            const res2 = await fetchCart();
            console.log(res2);
            if (res2.err) {
              console.error(res2.err);
            } else {
              dispatch(updateCart(res2.data.cart));
            }
          }
        }
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };
    getBooks();
  }, [dispatch]);

  if (!books) {
    return <BookCardSkeleton />;
  }

  return (
    <div className="container my-5">
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <div key={book.bookId} className="flex justify-center">
            <BookCard book={book} />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default BooksCardsContainer;
