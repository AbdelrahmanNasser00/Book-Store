import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
      className="hover:bg-highlight-color flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-green-500 transition-all duration-300 hover:scale-95 hover:text-gray-200"
      onClick={handleAddToCart}
    >
      <AddShoppingCartOutlinedIcon style={{ fontSize: "1.2rem" }} />
    </div>
  );
};

export default AddToCartBtn;
