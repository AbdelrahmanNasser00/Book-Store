import React from "react";
import { useNavigate } from "react-router-dom";

const ProceedToCheckoutButton = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="mt-6 flex w-full items-center justify-center">
      <button
        className="w-full rounded-md border border-indigo-600 bg-indigo-600 p-4 text-base font-medium text-white transition-all duration-300 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        onClick={handleCheckout}
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default ProceedToCheckoutButton;
