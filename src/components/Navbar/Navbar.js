import React from "react";
import UserSearch from "./UserSearch";
import Announcement from "./Announcement";
import Logo from "./Logo";
import NavbarActionsButtons from "./NavbarActionsButtons";
import NavigationLinks from "./NavigationLinks";
import NavbarActionsButtonsMobile from "./NavbarActionsButtonsMobile";
import MobileNav from "./MobileNav";
import { useCart } from "../../hooks/useCart";
import { NavContextProvider } from "../../context/NavContext";

const Navbar = () => {
  const { quantity, total } = useCart();

  return (
    <header className="flex w-full flex-col justify-center border-b border-gray-200">
      <NavContextProvider>
        <Announcement />
        <div className="flex flex-col items-center transition-all ease-in">
          {/* Mobile and Tablets */}
          <NavbarActionsButtonsMobile productQuantity={quantity} />
          {/* Desktop */}
          <div className="hidden flex-col justify-center px-4 lg:flex lg:w-full lg:flex-row">
            <div className="lg:block">
              <Logo width={10} />
            </div>
            <UserSearch />
            <NavbarActionsButtons
              productQuantity={quantity}
              totalPrice={total}
            />
          </div>
          <NavigationLinks />
        </div>
      </NavContextProvider>
      <MobileNav productQuantity={quantity} />
    </header>
  );
};
export default Navbar;
