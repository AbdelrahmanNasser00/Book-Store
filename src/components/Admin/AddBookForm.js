import React, { useContext, useEffect, useState } from "react";
import { StoreManagerContext } from "../../context/StoreManagerContext";
import { addBook, updateBook } from "../../api";
import AddBookInput from "./AddBookInput";

const AddBookForm = () => {
  const [name, setName] = useState("");
  const [authors, setAuthors] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [numberOfPages, setNumberOfPages] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const { bookToCatalog, setCatalogBook, editBook, setEditBook } =
    useContext(StoreManagerContext);

  useEffect(() => {
    if (bookToCatalog) {
      setName(bookToCatalog.title || "");
      setAuthors(bookToCatalog.authors || "");
      setCategory(bookToCatalog.genre || "");
      setDescription(bookToCatalog.description || "");
      setPrice(bookToCatalog.price || "");
      setNumberOfPages(bookToCatalog.pageCount || "");
      setQuantity(bookToCatalog.quantity || "");
      setImage(bookToCatalog.imageUrl || "");
    }
    if (editBook) {
      setName(editBook.name || "");
      setAuthors(editBook.authors || "");
      setCategory(editBook.category || "");
      setDescription(editBook.description || "");
      setPrice(editBook.price || "");
      setNumberOfPages(editBook.numberOfPages || "");
      setQuantity(editBook.quantity || "");
      setImage(editBook.image || "");
    }
  }, [bookToCatalog, editBook]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookDetails = {
      name,
      category,
      authors,
      numberOfPages,
      description,
      price,
      quantity,
      image,
    };

    try {
      if (editBook) {
        await updateBook(editBook.bookId, bookDetails);
      } else {
        await addBook(bookDetails);
      }
      resetForm();
      setEditBook(null);
      setCatalogBook(null);
    } catch (error) {
      console.error("Failed to save book:", error);
    }
  };

  const resetForm = () => {
    setName("");
    setAuthors("");
    setCategory("");
    setDescription("");
    setPrice("");
    setQuantity("");
    setImage("");
  };

  return (
    <form
      className="mt-4 space-y-6 rounded-lg bg-gray-100 p-6 shadow-md"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-bold text-gray-800">
        {editBook ? "Update Book" : "Add New Book"}
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <AddBookInput
          label="Name *"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <AddBookInput
          label="Authors *"
          type="text"
          value={authors}
          onChange={(e) => setAuthors(e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <AddBookInput
          label="Category *"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <AddBookInput
          label="Quantity *"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Short Summary *</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          maxLength={500}
          required
          className="w-full rounded-md border border-gray-300 p-2 text-gray-700 outline-none transition-all duration-200 focus:border focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-20"
        ></textarea>
        <small className="text-sm text-red-500">
          Discription doesn't exceed 500 letter
        </small>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <AddBookInput
          label="Price *"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <AddBookInput
          label="Number Of Pages *"
          type="number"
          value={numberOfPages}
          onChange={(e) => setNumberOfPages(e.target.value)}
          required
        />
      </div>

      <AddBookInput
        label="Image URL *"
        type="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <small className="text-sm text-red-500">
        Note: Please find a high-quality thumbnail image before submitting.
      </small>

      <button className="w-full rounded-md border border-indigo-600 bg-indigo-600 p-4 text-base font-medium text-white transition-all duration-300 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
        {editBook ? "Update Book" : "Add New Book"}
      </button>
    </form>
  );
};

export default AddBookForm;
