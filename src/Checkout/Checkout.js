import React from "react";
import CheckoutForm from "./CheckoutForm";
import YourOrder from "./YourOrder";
import Navbar from "../shared/components/Navbar/Navbar";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <div className="container flex flex-row">
        <CheckoutForm />
        <YourOrder />
      </div>
    </>
  );
};

export default Checkout;
