import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { addProduct } from "../../store/CartSlice";
import { useDispatch } from "react-redux";

const AddToCartBtn = ({ onClick, book }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addProduct({ ...book, quantity: 1 }));
  };
  return (
    <div
      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-sky-800 text-sky-800 transition-all duration-300 hover:scale-95 hover:bg-sky-800 hover:text-sky-50"
      onClick={handleAddToCart}
    >
      <ShoppingCartIcon />
    </div>
  );
};

export default AddToCartBtn;
