import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserSearch from "./UserSearch";
import Announcement from "./Announcement";
import Logo from "./Logo";
import NavbarActionsButtons from "./NavbarActionsButtons";
import NavigationLinks from "./NavigationLinks";

const Navbar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const productQuantity = useSelector((state) => state.cart.quantity);
  const totalPrice = useSelector((state) => state.cart.total);

  return (
    <>
      <Announcement />
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary flex flex-col bg-navbar-color transition-all ease-in">
        <div className="container flex !justify-center">
          <Logo />
          <UserSearch />
          <NavbarActionsButtons
            productQuantity={productQuantity}
            totalPrice={totalPrice}
            isCartVisible={isCartVisible}
          />
        </div>
        <NavigationLinks />
      </nav>
    </>
  );
};
export default Navbar;
