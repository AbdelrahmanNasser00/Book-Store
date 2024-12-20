import React, { useContext } from "react";
import { addProduct } from "../../store/CartSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../api";
import { AuthContext } from "../../context/AuthContext";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
const AddToCartBtn = ({ book }) => {
  const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  const handleAddToCart = async (e) => {
    e.stopPropagation();
    try {
      if (currentUser !== "guest") {
        await addToCart({ bookId: book.bookId, quantity: 1 }, currentUser);
      }
      dispatch(addProduct({ ...book, quantity: 1 }));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div
      className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md bg-indigo-500/20 font-medium text-indigo-500 transition-all duration-300 hover:bg-indigo-500 hover:text-indigo-200"
      onClick={handleAddToCart}
    >
      <div className="hidden px-1 md:block">
        <AddShoppingCartOutlinedIcon style={{ fontSize: "1.2rem" }} />
      </div>
      <span className="px-1 text-xs">Add to cart</span>
    </div>
  );
};

export default AddToCartBtn;
