import { useDispatch } from "react-redux";
import { updateCartItem } from "../api";
import { updateQuantity } from "../store/CartSlice";

const useUpdateCartQuantity = (currentUser) => {
  const dispatch = useDispatch();
  const updateProductQuantity = async (product, newQuantity) => {
    try {
      const updatedProduct = {
        bookId: product.bookId,
        quantity: newQuantity,
      };
      if (currentUser !== "guest") {
        const res = await updateCartItem(updatedProduct);
        if (!res.error && res.status >= 200 && res.status < 300) {
          dispatch(updateQuantity(updatedProduct));
        } else {
          throw new Error("Failed to update quantity");
        }
      } else {
        dispatch(updateQuantity(updatedProduct));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { updateProductQuantity };
};

export default useUpdateCartQuantity;
