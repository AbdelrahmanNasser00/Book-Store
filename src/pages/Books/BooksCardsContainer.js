import React from "react";
import BookCard from "./BookCard";
import Pagination from "../../shared/components/Pagination";
import BookCardSkeleton from "../../shared/components/BookCardSkeleton";
import UseFetchBooks from "../../hooks/useFetchBooks";
import useFetchCart from "../../hooks/useFetchCart";

const BooksCardsContainer = () => {
  const { books, loading: booksLoading, error: booksError } = UseFetchBooks();
  const { cart, loading: cartLoading, error: cartError } = useFetchCart();
  if (booksError || booksLoading) return <BookCardSkeleton />;

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
