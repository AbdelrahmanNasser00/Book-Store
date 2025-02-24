import React, { createContext } from "react";
import useCheckoutForm from "../hooks/useCheckoutForm";

const CheckoutContext = createContext();

export const CheckoutContextProvider = ({ children }) => {
  const {
    formData,
    handleInputChange,
    handleFormSubmit,
    paymentOption,
    handlePaymentChange,
    error,
    register,
    errors,
    isValid,
  } = useCheckoutForm();

  return (
    <CheckoutContext.Provider
      value={{
        formData,
        handleInputChange,
        handleFormSubmit,
        paymentOption,
        handlePaymentChange,
        error,
        register,
        errors,
        isValid,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContext;
