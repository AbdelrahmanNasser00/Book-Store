import { useContext, useEffect, useState } from "react";
import { updateCart } from "../store/CartSlice";
import { fetchCart } from "../api";
import { useDispatch } from "react-redux";
import { AuthContext } from "../context/AuthContext";

const useFetchCart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCart = async () => {
      if (currentUser === "guest") {
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        setLoading(true);
        const response = await fetchCart();
        setCart(response.data.cart);
        dispatch(updateCart(response.data.cart));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getCart();
  });
  return { cart, loading, error };
};

export default useFetchCart;
