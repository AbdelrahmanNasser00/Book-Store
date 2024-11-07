import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProceedToCheckoutButton = () => {
  const { currentUser } = useContext(AuthContext);
  // const userId = currentUser?.userDetails?.id;
  // const { products } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <>
      <button
        className="rounded-xl bg-orange-500 text-white"
        onClick={handleCheckout}
      >
        Proceed to checkout
      </button>
    </>
  );
};

export default ProceedToCheckoutButton;
