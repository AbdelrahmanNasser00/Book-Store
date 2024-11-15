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
      className="flex h-10 w-14 cursor-pointer items-center justify-center rounded-md border border-gray-200 text-green-500 transition-all duration-300 hover:bg-green-500 hover:text-gray-200"
      onClick={handleAddToCart}
    >
      <AddShoppingCartOutlinedIcon style={{ fontSize: "1.2rem" }} />
    </div>
  );
};

export default AddToCartBtn;
