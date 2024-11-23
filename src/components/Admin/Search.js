import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { StoreManagerContext } from "../../context/StoreManagerContext";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { setCatalogBook, toggleSearchVisibility } =
    useContext(StoreManagerContext);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const fetchBooks = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDBEJnZltzsEDF9gO_wJSbrxpwNcTzmlVw`,
        );
        setResults(res.data.items || []);
      } catch (error) {
        console.error("Error fetching data from Google Books API", error);
      }
    };

    const debounceTimeout = setTimeout(() => {
      fetchBooks();
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [query]);

  const handleAddToCatalog = (book) => {
    const bookDetails = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors?.join(", "),
      isbn: book.volumeInfo.industryIdentifiers?.[0]?.identifier,
      price: book.saleInfo.listPrice?.amount || "N/A",
      genre: book.volumeInfo.categories?.join(", "),
      pageCount: book.volumeInfo.pageCount,
      description: book.volumeInfo.description,
      imageUrl: book.volumeInfo.imageLinks?.thumbnail || "",
    };
    setCatalogBook(bookDetails);
    toggleSearchVisibility(false);
  };

  return (
    <div className="p-4">
      <input
        value={query}
        placeholder="Search for book"
        className="h-10 w-full rounded-md border border-gray-200 px-2 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-20"
        onChange={(e) => setQuery(e.target.value)}
      />

      {results.length > 0 && (
        <ul className="mt-3 space-y-4">
          {results.map((book) => (
            <li
              key={book.id}
              className="flex items-start items-center justify-between rounded-lg border border-gray-300 p-4 shadow-sm"
            >
              <div className="flex items-start">
                <img
                  src={
                    book.volumeInfo.imageLinks?.thumbnail ||
                    "https://via.placeholder.com/128x192?text=No+Image"
                  }
                  alt={book.volumeInfo.title}
                  className="h-24 w-16 rounded object-cover shadow-sm"
                />
                <div className="ml-4">
                  <h5 className="text-lg font-semibold text-gray-800">
                    {book.volumeInfo.title}
                  </h5>
                  <p className="text-sm text-gray-600">
                    {book.volumeInfo.authors?.join(", ")}
                  </p>
                  <p className="text-sm text-gray-600">
                    ISBN: {book.volumeInfo.industryIdentifiers?.[0]?.identifier}
                  </p>
                  <p className="text-sm text-gray-600">
                    Suggested price:{" "}
                    {book.saleInfo.listPrice?.amount
                      ? `$${book.saleInfo.listPrice.amount}`
                      : "N/A"}
                  </p>
                </div>
              </div>
              <button
                className="rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                onClick={() => handleAddToCatalog(book)}
              >
                Add to database
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
