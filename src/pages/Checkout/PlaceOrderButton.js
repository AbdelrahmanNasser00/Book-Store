import { useContext } from "react";
import CheckoutContext from "../../context/CheckoutContext";

const PlaceOrderButton = () => {
  const { handleSubmit } = useContext(CheckoutContext);
  return (
    <div className="mt-6 flex w-full items-center justify-center">
      <button
        className="w-full rounded-md border border-indigo-600 bg-indigo-600 p-4 text-base font-medium text-white transition-all duration-300 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        onClick={handleSubmit}
      >
        Place order
      </button>
    </div>
  );
};

export default PlaceOrderButton;
