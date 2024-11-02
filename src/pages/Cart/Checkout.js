import React from "react";
import CheckoutForm from "./CheckoutForm";
import Navbar from "../../shared/components/Navbar/Navbar";
import YourOrder from "./YourOrder";

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
