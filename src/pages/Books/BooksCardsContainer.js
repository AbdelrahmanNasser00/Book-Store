import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import Pagination from "../../shared/components/Pagination";
import { useDispatch } from "react-redux";
import { loadBooks } from "../../store/BookSlice";
import { fetchBooks } from "../../api";
import BookCardSkeleton from "../../shared/components/BookCardSkeleton";

const BooksCardsContainer = () => {
  const [books, setBooks] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetchBooks();
        if (res.err) {
          console.error(res.err);
        } else {
          dispatch(loadBooks(res.data.books));
          setBooks(res.data.books);
          console.log(books);
        }
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };
    getBooks();
  }, []);

  if (!books) {
    return <BookCardSkeleton />;
  }

  return (
    <div className="container my-5">
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <div key={book._id} className="flex justify-center">
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
