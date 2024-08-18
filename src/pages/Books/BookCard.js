import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";

const BookCard = ({ book }) => {
  const defaultImage = "https://via.placeholder.com/300x400?text=No+Image";
  console.log(book.image);
  return (
    <MDBCard>
      <div className="d-flex justify-content-between p-3">
        <p className="lead mb-0">Today's Featured Book</p>
      </div>
      <MDBCardImage
        src={book.image}
        onError={(e) => (e.target.src = defaultImage)}
        position="top"
        alt="Book Cover"
      />
      <MDBCardBody>
        <div className="d-flex justify-content-between">
          <p className="small">
            <a href="#!" className="text-muted">
              {book.authors}
            </a>
          </p>
          <p className="small text-danger">
            <s>{book.price}</s>
          </p>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <h5 className="mb-0">{book.title}</h5>
          <h5 className="text-dark mb-0">{book.price}</h5>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <p className="text-muted mb-0">
            Language: <span className="fw-bold">{book.language}</span>
          </p>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default BookCard;
