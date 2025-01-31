import React, { useMemo, useState } from "react";
import BookCard from "./BookCard";
import BookCardSkeleton from "../../components/UI/BookCardSkeleton";
import useFetchBooks from "../../hooks/useFetchBooks";
import Pagination from "@mui/material/Pagination";

const BooksCardsContainer = ({ filter }) => {
  const { books, loading: booksLoading, error: booksError } = useFetchBooks();
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

  // Memoized sorting and pagination logic
  const processedBooks = useMemo(() => {
    let sortedBooks = [...books];

    switch (filter) {
      case "priceLowToHigh":
        sortedBooks.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        sortedBooks.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return sortedBooks;
  }, [books, filter]);

  // Pagination calculations
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = processedBooks.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(processedBooks.length / booksPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 500);
  };

  // Book cards skeleton
  const renderSkeletons = (count) =>
    Array(count)
      .fill(0)
      .map((_, index) => <BookCardSkeleton key={index} />);

  const renderBooks = () =>
    currentBooks.map((book) => (
      <div key={book.bookId} className="flex justify-center">
        <BookCard book={book} />
      </div>
    ));

  return (
    <div className="my-5 flex flex-col items-center justify-start lg:my-1">
      <div className="grid max-w-screen-xl auto-rows-min grid-cols-1 gap-2 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {booksError || booksLoading
          ? renderSkeletons(booksPerPage)
          : renderBooks()}
      </div>
      {!booksLoading && !booksError && (
        <div className="mt-6">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="medium"
            variant="text"
            shape="rounded"
          />
        </div>
      )}
    </div>
  );
};

export default BooksCardsContainer;
