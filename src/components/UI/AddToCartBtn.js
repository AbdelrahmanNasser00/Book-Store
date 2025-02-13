import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useToast } from "../../context/ToastContext";
import { useCart } from "../../hooks/useCart";
import { addGuestProduct } from "../../store/CartSlice";

const AddToCartBtn = ({ book }) => {
  const { addItem } = useCart();
  const { currentUser } = useContext(AuthContext);
  const { showToast } = useToast();
  const dispatch = useDispatch();
  const handleAddToCart = async (e) => {
    e.stopPropagation();
    try {
      if (currentUser !== "guest") {
        await addItem({ bookId: book.bookId, quantity: 1 });
      }
      dispatch(addGuestProduct({ ...book, quantity: 1 }));
      showToast("Book added to cart");
    } catch (err) {
      showToast("Failed to add book to cart", "fail");
    }
  };
  return (
    <>
      <button
        className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md bg-indigo-500/20 font-medium text-indigo-500 transition-all duration-300 hover:bg-indigo-500 hover:text-indigo-200"
        onClick={handleAddToCart}
      >
        <div className="hidden px-1 md:block">
          <AddShoppingCartOutlinedIcon style={{ fontSize: "1.2rem" }} />
        </div>
        <span className="px-1 text-xs">Add to cart</span>
      </button>
    </>
  );
};

export default AddToCartBtn;
