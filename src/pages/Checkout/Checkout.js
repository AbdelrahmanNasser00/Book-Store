import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { CheckoutContextProvider } from "../../context/CheckoutContext";
import OrderSummery from "../../components/Checkout/OrderSummery";
import CheckoutForm from "../../components/Checkout/CheckoutForm";
import Footer from "../../components/Footer";

const Checkout = () => {
  return (
    <CheckoutContextProvider>
      <Navbar />
      <div className="my-5 flex w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-center lg:max-w-[1200px] lg:flex-row lg:items-start lg:justify-start">
          <CheckoutForm />
          <OrderSummery />
        </div>
      </div>
      <Footer />
    </CheckoutContextProvider>
  );
};

export default Checkout;
