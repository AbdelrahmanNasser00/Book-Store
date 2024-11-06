import axios from "axios";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProceedButton = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.userDetails?.id;
  const { products } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (currentUser === "guest") {
      return navigate("/login");
    }
    const cart = products.map((item) => ({
      ...item,
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

export default ProceedButton;
