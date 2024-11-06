import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";
import Breadcrump from "../../shared/components/Breadcrumb";
import { useSelector } from "react-redux";
import Navbar from "../../shared/components/Navbar/Navbar";
const CategoryPage = () => {
  const books = useSelector((state) => state.book.books);
  const { category } = useParams();
  const filteredBooks = useMemo(() => {
    if (books) {
      return books.filter((book) => book.category === category);
    }
    return [];
  }, [books, category]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Breadcrump category={category} bookName={""} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {filteredBooks.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};
export default CategoryPage;
