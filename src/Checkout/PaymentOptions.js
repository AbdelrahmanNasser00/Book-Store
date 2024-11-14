import { useContext } from "react";
import CheckoutContext from "../context/CheckoutContext";

const PaymentOptions = () => {
  const { paymentOption, handlePaymentChange } = useContext(CheckoutContext);

  return (
    <div className="w-full space-y-2 rounded-lg bg-white p-4 shadow-md">
      <label className="text-sm font-medium">Payment Method</label>
      <div className="flex items-center">
        <input
          type="radio"
          id="cashOnDelivery"
          name="paymentMethod"
          value="cashOnDelivery"
          checked={paymentOption === "cashOnDelivery"}
          onChange={(e) => handlePaymentChange(e.target.value)}
          className="mr-2"
        />
        <label htmlFor="cashOnDelivery" className="text-sm">
          Cash on delivery - عند الاستلام
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="debitCreditCard"
          name="paymentMethod"
          value="debitCreditCard"
          checked={paymentOption === "debitCreditCard"}
          onChange={(e) => handlePaymentChange(e.target.value)}
          className="mr-2"
        />
        <label htmlFor="debitCreditCard" className="text-sm">
          Debit/Credit Card
        </label>
      </div>
    </div>
  );
};

export default PaymentOptions;
