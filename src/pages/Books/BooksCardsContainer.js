import React from "react";
import BookCard from "./BookCard";
import Pagination from "../../shared/components/Pagination";
import BookCardSkeleton from "../../shared/components/BookCardSkeleton";
import UseFetchBooks from "../../hooks/useFetchBooks";
import useFetchCart from "../../hooks/useFetchCart";

const BooksCardsContainer = () => {
  const { books, loading: booksLoading, error: booksError } = UseFetchBooks();
  const { cart, loading: cartLoading, error: cartError } = useFetchCart();
  // if (booksError || booksLoading) return <BookCardSkeleton />;
  const renderSkeletons = (count) => {
    return Array(count)
      .fill(0)
      .map((_, index) => <BookCardSkeleton key={index} />);
  };
  const renderBooks = () =>
    books.map((book) => (
      <div key={book.bookId} className="flex justify-center lg:w-52">
        <BookCard book={book} />
      </div>
    ));

  return (
    <div className="my-5 flex min-h-screen flex-col items-center justify-center">
      <div className="grid max-w-[1200px] grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {booksError || booksLoading ? renderSkeletons(12) : renderBooks()}
      </div>
      <div className="mt-4 flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default BooksCardsContainer;
