import React from "react";
import BookCard from "./BookCard";
import BookCardSkeleton from "../../components/UI/BookCardSkeleton";
import useFetchBooks from "../../hooks/useFetchBooks";

const BooksCardsContainer = () => {
  const { books, loading: booksLoading, error: booksError } = useFetchBooks();

  const renderSkeletons = (count) => {
    return Array(count)
      .fill(0)
      .map((_, index) => <BookCardSkeleton key={index} />);
  };

  const renderBooks = () =>
    books.map((book) => (
      <div key={book.bookId} className="flex justify-center">
        <BookCard book={book} />
      </div>
    ));

  return (
    <div className="my-5 flex min-h-screen flex-col items-center justify-start lg:my-1">
      <div className="grid max-w-screen-xl auto-rows-min grid-cols-1 gap-2 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {booksError || booksLoading ? renderSkeletons(12) : renderBooks()}
      </div>
    </div>
  );
};

export default BooksCardsContainer;
