import React, { useContext, useEffect, useState } from "react";
import {
  MDBInput,
  MDBTextArea,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { StoreManagerContext } from "../../context/StoreManagerContext";
import { addBook } from "../../api";

const AddBookForm = () => {
  const [name, setName] = useState("");
  const [authors, setAuthors] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [numberOfPages, setNumberOfPages] = useState("");
  // const [quantity, setQuantity] = useState("");
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
      // setQuantity(bookToCatalog.quantity || "");
      setImage(bookToCatalog.imageUrl || "");
    }
    if (editBook) {
      setName(editBook.name || "");
      setAuthors(editBook.authors || "");
      setCategory(editBook.category || "");
      setDescription(editBook.description || "");
      setPrice(editBook.price || "");
      setNumberOfPages(editBook.numberOfPages || "");
      // setQuantity(editBook.quantity || "");
      setImage(editBook.image || "");
    }
  }, [bookToCatalog, editBook]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = {
      name,
      category,
      authors,
      numberOfPages,
      description,
      price,
      image,
    };
    await addBook(newBook);
    setEditBook(null);
    setCatalogBook(null);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setAuthors("");
    setCategory("");
    setDescription("");
    setPrice("");
    setImage("");
  };

  return (
    <form
      style={{ backgroundColor: "#eee", marginTop: "10px" }}
      onSubmit={handleSubmit}>
      <h3>Add Book</h3>

      <MDBRow className="mb-3">
        <MDBCol md="6">
          <MDBInput
            label="Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput
            label="Authors *"
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
            required
          />
        </MDBCol>
      </MDBRow>

      <MDBRow className="mb-3">
        <MDBCol md="6">
          <MDBInput
            label="Category *"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </MDBCol>
      </MDBRow>

      <MDBRow className="mb-3">
        <MDBCol>
          <MDBTextArea
            label="Short Summary *"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            maxLength={500}
            required
          />
        </MDBCol>
      </MDBRow>

      <MDBRow className="mb-3">
        <MDBCol md="3">
          <MDBInput
            label="Price *"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            step="1"
            required
          />
        </MDBCol>
        <MDBCol md="3">
          <MDBInput
            label="Number Of Pages *"
            value={numberOfPages}
            onChange={(e) => setNumberOfPages(e.target.value)}
            type="number"
            step="1"
            required
          />
        </MDBCol>
      </MDBRow>

      <MDBRow className="mb-3">
        <MDBCol>
          <MDBInput
            label="Image URL *"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="url"
            required
          />
          <small className="form-text text-danger">
            Note: the Google Books API tends to return poor quality thumbnails.
            Please find a good quality thumbnail image before submitting.
          </small>
        </MDBCol>
      </MDBRow>

      <MDBBtn type="submit" color="success">
        Add
      </MDBBtn>
    </form>
  );
};

export default AddBookForm;
