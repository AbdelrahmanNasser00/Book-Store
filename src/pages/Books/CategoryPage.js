import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";
import Breadcrumb from "../../components/UI/Breadcrumb";
import Navbar from "../../components/Navbar/Navbar";
import { toLower } from "lodash";
import Footer from "../../components/Footer";
import { useBooks } from "../../hooks/useBooks";

const CategoryPage = () => {
  const {
    books,
    getBooks,
    loading: booksLoading,
    error: booksError,
  } = useBooks();
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await getBooks();
    };
    fetchData();
  }, [getBooks]);

  const filteredBooks = useMemo(() => {
    if (books) {
      return books.filter((book) => toLower(book.category) === category);
    }
    return [];
  }, [books, category]);

  return (
    <>
      <Navbar />
      <section className="container mx-auto min-h-screen px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb category={category} bookName={""} />

        <header className="mb-8 text-start">
          <h1 className="text-2xl font-bold capitalize md:text-3xl">
            {category} Books
          </h1>
          <p className="mt-2 text-gray-600">
            Browse our curated collection of {category} books.
          </p>
        </header>

        <div>
          {booksLoading && (
            <div className="flex items-center justify-center py-12">
              <div className="loader h-12 w-12 animate-spin rounded-full border-t-4 border-gray-400"></div>
            </div>
          )}
          {booksError && (
            <p className="text-center text-red-500">Failed to load books.</p>
          )}
          {!booksLoading && !booksError && filteredBooks.length === 0 && (
            <p className="text-center text-gray-600">
              No books found in this category.
            </p>
          )}
          {!booksLoading && filteredBooks.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredBooks.map((book) => (
                <BookCard key={book.bookId} book={book} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CategoryPage;
