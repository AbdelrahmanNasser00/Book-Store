import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  selectCartItems,
  selectCartQuantity,
  selectCartTotal,
  selectCartLoading,
  selectCartError,
} from "../store/CartSlice";

export const useCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const quantity = useSelector(selectCartQuantity);
  const total = useSelector(selectCartTotal);
  const loading = useSelector(selectCartLoading);
  const error = useSelector(selectCartError);

  const getCart = useCallback(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const addItem = useCallback(
    (cartData) => {
      dispatch(addToCart(cartData));
    },
    [dispatch],
  );

  const updateItem = useCallback(
    ({ bookId, quantity }) => {
      dispatch(updateCartItem({ bookId, quantity }));
    },
    [dispatch],
  );

  const removeItem = useCallback(
    (bookId) => {
      dispatch(removeFromCart(bookId));
    },
    [dispatch],
  );

  const emptyCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return {
    // State
    cartItems,
    quantity,
    total,
    loading,
    error,

    // Actions
    getCart,
    addItem,
    updateItem,
    removeItem,
    emptyCart,
  };
};
