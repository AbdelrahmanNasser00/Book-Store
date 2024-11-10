import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import UserSearch from "./UserSearch";
import Announcement from "./Announcement";
import Logo from "./Logo";
import NavbarActionsButtons from "./NavbarActionsButtons";
import NavigationLinks from "./NavigationLinks";
import HamburgerIcon from "./HamburgerIcon";
import NavbarActionBtnWithIcon from "./NavbarActionBtnWithIcon";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { NavContextProvider } from "../../../context/NavContext";

const Navbar = () => {
  const productQuantity = useSelector((state) => state.cart.quantity);
  const totalPrice = useSelector((state) => state.cart.total);

  return (
    <header className="flex w-full flex-col justify-center">
      <NavContextProvider>
        <Announcement />
        <div className="flex flex-col items-center bg-navbar-color transition-all ease-in">
          <div className="flex w-full flex-col justify-center px-4 lg:flex-row">
            {/* Logo and Hamburger Icon in mobile mode */}
            <div className="my-3 flex items-center justify-between lg:hidden">
              <HamburgerIcon />
              <Logo width={9} />
              <NavbarActionBtnWithIcon
                icon={<ShoppingCartOutlinedIcon />}
                badge={
                  <Badge
                    badgeContent={productQuantity || 0}
                    color="primary"
                    style={{ padding: "5px" }}
                  ></Badge>
                }
                text={parseInt(totalPrice) + "EGP"}
              />
            </div>
            <div className="hidden lg:block">
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
    </header>
  );
};
export default Navbar;
