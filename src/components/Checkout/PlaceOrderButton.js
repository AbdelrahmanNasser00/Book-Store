import { useContext } from "react";
import CheckoutContext from "../../context/CheckoutContext";

const PlaceOrderButton = () => {
  const { handleFormSubmit, isValid, error } = useContext(CheckoutContext);

  return (
    <div className="mt-6 flex w-full flex-col items-center justify-center">
      {error && (
        <div className="mb-4 w-full rounded-md bg-red-50 p-4">
          <p className="text-center text-sm text-red-600">{error}</p>
        </div>
      )}
      <button
        type="button"
        onClick={handleFormSubmit}
        disabled={!isValid}
        className={`w-full rounded-md border border-indigo-600 p-4 text-base font-medium text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
          isValid
            ? "bg-indigo-600 hover:bg-indigo-800"
            : "cursor-not-allowed bg-indigo-400"
        }`}
      >
        Place order
      </button>
    </div>
  );
};

export default PlaceOrderButton;
