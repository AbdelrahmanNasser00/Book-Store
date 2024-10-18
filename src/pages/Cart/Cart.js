import React from "react";
import Navbar from "../../shared/components/Navbar";
import Announcement from "../../shared/components/Announcement";
import CartContainer from "./CartContainer";

const Cart = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <CartContainer />
    </div>
  );
};

export default Cart;
