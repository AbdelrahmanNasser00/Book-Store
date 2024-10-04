import React, { useEffect, useState } from "react";
import { fetchBooks } from "../../api";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";
import Navbar from "../../shared/components/Navbar";
const CategoryPage = () => {
  const [books, setBooks] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    const getBooks = async () => {
      const response = await fetchBooks();
      if (response.error) {
        console.log(response.error);
      } else {
        setBooks(response.data.books);
      }
    };
    getBooks();
  });
  const filteredBooks = books.filter((book) =>
    book.category.includes(category)
  );
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">{category}</h1>
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
