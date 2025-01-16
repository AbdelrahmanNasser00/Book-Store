import React from "react";
import { useSelector } from "react-redux";
import UserSearch from "./UserSearch";
import Announcement from "./Announcement";
import Logo from "./Logo";
import NavbarActionsButtons from "./NavbarActionsButtons";
import NavigationLinks from "./NavigationLinks";
import { NavContextProvider } from "../../context/NavContext";
import useFetchCart from "../../hooks/useFetchCart";
import NavbarActionsButtonsMobile from "./NavbarActionsButtonsMobile";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const { cart, loading: cartLoading, error: cartError } = useFetchCart();
  const productQuantity = useSelector((state) => state.cart.quantity);
  const totalPrice = useSelector((state) => state.cart.total);

  return (
    <header className="flex w-full flex-col justify-center border-b border-gray-200">
      <NavContextProvider>
        <Announcement />
        <div className="flex flex-col items-center transition-all ease-in">
          {/* Mobile and Tablets */}
          <NavbarActionsButtonsMobile productQuantity={productQuantity} />
          {/* Desktop */}
          <div className="hidden flex-col justify-center px-4 lg:flex lg:w-full lg:flex-row">
            <div className="lg:block">
              <Logo width={10} />
            </div>
            <UserSearch />
            <NavbarActionsButtons
              productQuantity={productQuantity}
              totalPrice={totalPrice}
            />
          </div>
          <NavigationLinks />
        </div>
      </NavContextProvider>
      <MobileNav productQuantity={productQuantity} />
    </header>
  );
};
export default Navbar;
