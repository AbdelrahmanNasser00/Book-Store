import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import ProductPage from "./ProductPage";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
  const defaultImage = "https://via.placeholder.com/300x400?text=No+Image";
  const navigate = useNavigate();

  const handleProductpage = () => {
    console.log(book);
    navigate(`/product/${book._id}`, { state: book });
  };

  return (
    <MDBCard
      className="flex-grow-1 d-flex flex-column"
      onClick={handleProductpage}>
      <MDBCardImage
        src={book.image}
        onError={(e) => (e.target.src = defaultImage)}
        position="top"
        alt="Book Cover"
        style={{ maxHeight: "250px", objectFit: "contain" }}
      />
      <MDBCardBody className="d-flex flex-column flex-grow-1">
        <div className="d-flex justify-content-between mb-1">
          <h6 className="mb-0 text-sm text-truncate">{book.title}</h6>
        </div>
        <div className="d-flex justify-center items-center">
          <h6 className="text-dark mb-0">{book.price}</h6>
          <h4 className="small text-danger mb-0">
            <s>{book.price}</s>
          </h4>
        </div>
      </MDBCardBody>
      <div className="d-flex justify-content-center mb-3 mt-auto">
        <MDBBtn className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
          Add to cart
        </MDBBtn>
      </div>
    </MDBCard>
  );
};

export default BookCard;
