import { removeCartItem } from "../api";
import { removeProduct } from "../store/CartSlice";
import { useDispatch } from "react-redux";

const UseDeleteCartItem = (currentUser) => {
  const dispatch = useDispatch();

  const deleteCartItem = async (product) => {
    try {
      if (currentUser !== "guest") {
        const res = await removeCartItem(product.bookId);
        if (!res.error && res.status >= 200 && res.status < 300) {
          dispatch(removeProduct(product));
        } else {
          throw new Error("Failed to delete product");
        }
      } else {
        dispatch(removeProduct(product));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { deleteCartItem };
};

export default UseDeleteCartItem;
