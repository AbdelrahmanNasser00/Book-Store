import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";
import Navbar from "../../shared/components/Navbar";
import Breadcrump from "../../shared/components/Breadcrumb";
import { useSelector } from "react-redux";
const CategoryPage = () => {
  const books = useSelector((state) => state.book.books);
  const { category } = useParams();
  const filteredBooks = useMemo(() => {
    if (books) {
      return books.filter((book) => book.category === category);
    }
    return [];
  }, [books, category]);
  console.log(filteredBooks);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Breadcrump category={category} bookName={""} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};
export default CategoryPage;
