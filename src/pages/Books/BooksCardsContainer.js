import React, { useState } from "react";
import BookCard from "./BookCard";
import BookCardSkeleton from "../../components/UI/BookCardSkeleton";
import useFetchBooks from "../../hooks/useFetchBooks";
import Pagination from "@mui/material/Pagination";

const BooksCardsContainer = () => {
  const { books, loading: booksLoading, error: booksError } = useFetchBooks();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8; // Number of books per page

  // Calculate the current books to display
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Determine the total number of pages
  const totalPages = Math.ceil(books.length / booksPerPage);

  // Handler for page changes
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const renderSkeletons = (count) => {
    return Array(count)
      .fill(0)
      .map((_, index) => <BookCardSkeleton key={index} />);
  };

  const renderBooks = () =>
    currentBooks.map((book) => (
      <div key={book.bookId} className="flex justify-center">
        <BookCard book={book} />
      </div>
    ));

  return (
    <div className="my-5 flex min-h-screen flex-col items-center justify-start lg:my-1">
      {/* Books Grid */}
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
            size="large"
            variant="outlined"
          />
        </div>
      )}
    </div>
  );
};

export default BooksCardsContainer;
