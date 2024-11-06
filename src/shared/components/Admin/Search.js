import React, { useContext, useEffect, useState } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardImage,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import axios from "axios";
import { StoreManagerContext } from "../../../context/StoreManagerContext";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { setCatalogBook, toggleSearchVisibility } =
    useContext(StoreManagerContext);

  useEffect(() => {
    if (query.trim === "") {
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
    <div>
      <MDBInputGroup>
        <MDBInput
          label="Search query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </MDBInputGroup>

      {results.length > 0 && (
        <MDBListGroup className="mt-3">
          {results.map((book) => (
            <MDBListGroupItem
              key={book.id}
              className="d-flex justify-content-between align-items-center"
            >
              <div className="d-flex">
                <MDBCardImage
                  src={
                    book.volumeInfo.imageLinks?.thumbnail ||
                    "https://via.placeholder.com/128x192?text=No+Image"
                  }
                  alt={book.volumeInfo.title}
                  style={{ width: "80px", marginRight: "10px" }}
                />
                <div>
                  <h5>{book.volumeInfo.title}</h5>
                  <p>{book.volumeInfo.authors?.join(", ")}</p>
                  <p>
                    ISBN: {book.volumeInfo.industryIdentifiers?.[0]?.identifier}
                  </p>
                  <p>
                    Suggested price:{" "}
                    {book.saleInfo.listPrice?.amount
                      ? `$${book.saleInfo.listPrice.amount}`
                      : "N/A"}
                  </p>
                </div>
              </div>
              <MDBBtn color="primary" onClick={() => handleAddToCatalog(book)}>
                + Add to catalog
              </MDBBtn>
            </MDBListGroupItem>
          ))}
        </MDBListGroup>
      )}
    </div>
  );
};

export default Search;
