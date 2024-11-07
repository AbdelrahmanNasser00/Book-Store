import { useContext } from "react";
import CheckoutContext from "../context/CheckoutContext";

const PlaceOrderButton = () => {
  const { handleSubmit } = useContext(CheckoutContext);
  return (
    <>
      <button
        className="rounded-xl bg-orange-500 text-white"
        onClick={handleSubmit}
      >
        Check Out
      </button>
    </>
  );
};

export default PlaceOrderButton;
