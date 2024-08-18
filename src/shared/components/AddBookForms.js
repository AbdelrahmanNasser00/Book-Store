import React, { useEffect, useState } from "react";
import {
  MDBInput,
  MDBTextArea,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { appendBook } from "../../store/BookSlice";
import { useDispatch } from "react-redux";

const AddBookForm = ({ addToCatalog, setAddToCatalog }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [isbn, setIsbn] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (addToCatalog) {
      setTitle(addToCatalog.title);
      setAuthor(addToCatalog.authors);
      setGenre(addToCatalog.genre);
      setDescription(addToCatalog.description);
      setIsbn(addToCatalog.isbn);
      setPrice(addToCatalog.price);
      setQuantity(addToCatalog.quantity);
      setImageUrl(addToCatalog.imageUrl);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title: title,
      author: author,
      genre: genre,
      description: description,
      isbn: isbn,
      price: price,
      quantity: quantity,
      imageUrl: imageUrl,
    };
    setAddToCatalog(null);
    dispatch(appendBook(newBook));
  };

  return (
    <form style={{ backgroundColor: "#eee", marginTop: "10px" }}>
      <h3>Add Book</h3>

      <MDBRow className="mb-3">
        <MDBCol md="6">
          <MDBInput
            label="Title *"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput
            label="Author *"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </MDBCol>
      </MDBRow>

      <MDBRow className="mb-3">
        <MDBCol md="6">
          <MDBInput
            label="Genre *"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
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
          {/* <small className="form-text text-muted">
            Characters: {summary.length} / 500
          </small> */}
        </MDBCol>
      </MDBRow>

      <MDBRow className="mb-3">
        <MDBCol md="6">
          <MDBInput
            label="ISBN (10 or 13 digits) *"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
          />
        </MDBCol>
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
            label="Quantity in Stock *"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            required
          />
        </MDBCol>
      </MDBRow>

      <MDBRow className="mb-3">
        <MDBCol>
          <MDBInput
            label="Image URL *"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="url"
            required
          />
          <small className="form-text text-danger">
            Note: the Google Books API tends to return poor quality thumbnails.
            Please find a good quality thumbnail image before submitting.
          </small>
        </MDBCol>
      </MDBRow>

      <MDBBtn type="submit" color="success" onClick={handleSubmit}>
        Add
      </MDBBtn>
    </form>
  );
};

export default AddBookForm;
