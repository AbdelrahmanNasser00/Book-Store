import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";

const AddToCartBtn = ({ handleAddToCart }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    handleAddToCart();
  };
  return (
    <div className="d-flex justify-content-center mb-3 mt-auto">
      <MDBBtn
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
        onClick={handleClick}>
        Add to cart
      </MDBBtn>
    </div>
  );
};

export default AddToCartBtn;
