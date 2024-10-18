import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import ProductPage from "./ProductPage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/CartSlice";
import AddToCartBtn from "../../shared/components/AddToCartBtn";

const BookCard = ({ book }) => {
  const defaultImage = "https://via.placeholder.com/300x400?text=No+Image";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
  const quantity = useSelector((state) => state.cart.quantity);
  const totalPrice = useSelector((state) => state.cart.total);
  const handleProductpage = (e) => {
    e.stopPropagation();
    navigate(`/product/${book._id}`, { state: book });
  };
  const handleAddToCart = (e) => {
    dispatch(addProduct({ ...book, quantity: 1 }));
  };

  return (
    <MDBCard
      className="flex-grow-1 d-flex flex-column"
      style={{ cursor: "pointer" }}
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
      <AddToCartBtn handleAddToCart={handleAddToCart} />
    </MDBCard>
  );
};

export default BookCard;
