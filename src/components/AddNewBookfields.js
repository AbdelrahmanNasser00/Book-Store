import React, { useState } from "react";
const AddNewBookField = ({ onAddNewBook }) => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookLanguage, setBookLanguage] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");

  const handleAddNewBook = () => {
    const newBook = {
      id: Date.now(),
      title: bookTitle,
      author: bookAuthor,
      language: bookLanguage,
      price: bookPrice,
      salePrice: salePrice,
    };
    onAddNewBook(newBook);
    setBookTitle("");
    setBookAuthor("");
    setBookLanguage("");
    setBookPrice("");
    setSalePrice("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Book Title"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={bookAuthor}
        onChange={(e) => setBookAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Language"
        value={bookLanguage}
        onChange={(e) => setBookLanguage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={bookPrice}
        onChange={(e) => setBookPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sale Price"
        value={salePrice}
        onChange={(e) => setSalePrice(e.target.value)}
      />
      <button onClick={handleAddNewBook}>Add</button>
    </div>
  );
};
export default AddNewBookField;
