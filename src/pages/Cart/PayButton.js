import axios from "axios";
import { apiClient } from "../../api";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useSelector } from "react-redux";

const PayButton = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.userDetails.id;
  const { products } = useSelector((state) => state.cart);

  const handleCheckout = () => {
    const cart = products.map((item) => ({
      ...item.book,
      quantity: item.quantity,
    }));
    axios
      .post(`http://localhost:8080/api/stripe/create-checkout-session`, {
        cart,
        userId,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <button
        className="rounded-xl bg-orange-500 text-white"
        onClick={handleCheckout}
      >
        Check Out
      </button>
    </>
  );
};

export default PayButton;
