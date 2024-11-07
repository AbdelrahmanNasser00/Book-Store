import React, { createContext } from "react";
import useCheckoutForm from "../hooks/useCheckoutForm";

const CheckoutContext = createContext();

export const CheckoutContextProvider = ({ children }) => {
  const {
    formData,
    handleInputChange,
    handleSubmit,
    paymentOption,
    handlePaymentChange,
  } = useCheckoutForm();

  return (
    <CheckoutContext.Provider
      value={{
        formData,
        handleInputChange,
        handleSubmit,
        paymentOption,
        handlePaymentChange,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContext;
