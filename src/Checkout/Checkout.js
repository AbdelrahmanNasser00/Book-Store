import React from "react";
import CheckoutForm from "./CheckoutForm";
import YourOrder from "./YourOrder";
import Navbar from "../shared/components/Navbar/Navbar";
import { CheckoutContextProvider } from "../context/CheckoutContext";

const Checkout = () => {
  return (
    <CheckoutContextProvider>
      <Navbar />
      <div className="container my-5 justify-center p-8 sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
        <CheckoutForm />
        <YourOrder />
      </div>
    </CheckoutContextProvider>
  );
};

export default Checkout;
