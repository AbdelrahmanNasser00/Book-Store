import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../CSS/Navbar.css";
import HomeSearch from "./HomeSearch";
import SideCart from "./SideCart";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import darkLogo from "../imgs/GitBook - Dark.svg";
import NavbarBtn from "./NavbarBtn";
import NavbarIcon from "./NavbarIcon";
import Announcement from "./Announcement";
const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const productQuantity = useSelector((state) => state.cart.quantity);
  const totalPrice = useSelector((state) => state.cart.total);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };
  const handleCartVisibilty = () => {
    navigate("/cart");
    // setIsCartVisible(!isCartVisible);
  };
  const handleFavorite = () => {
    navigate("/wishlist");
  };
  return (
    <>
      <Announcement />
      <nav className="bg-navbar-color navbar navbar-expand-lg navbar-light bg-body-tertiary flex flex-col transition-all ease-in">
        {/* Container wrapper */}
        <div className="container">
          <div className="max-w-[190px] lg:max-w-[190px]">
            <a href="/">
              <div className="flex items-center">
                <img src={darkLogo} alt="" />
              </div>
            </a>
          </div>
          <HomeSearch />

          {/* Right elements */}
          <div className="d-flex align-items-center">
            <NavbarIcon
              icon={<FavoriteBorderIcon />}
              onClick={handleFavorite}
            />
            <NavbarIcon
              icon={<ShoppingCartOutlinedIcon />}
              badge={
                <Badge
                  badgeContent={productQuantity}
                  color="primary"
                  style={{ padding: "5px" }}
                ></Badge>
              }
              text={parseInt(totalPrice) + "EGP"}
              onClick={handleCartVisibilty}
            />
            {isCartVisible && <SideCart isOpen={isCartVisible} />}
          </div>
          {/* Right elements */}
        </div>
        <div className="d-flex align-items-center mt-2">
          <NavbarBtn text={"Home"} />
          <NavbarBtn text={"Software Engineering"} />
          <NavbarBtn text={"Data Science"} />
          <NavbarBtn text={"Technology"} />
          <NavbarBtn text={"Cybersecurity"} />
          <NavbarBtn text={"Management"} />
          <NavbarBtn text={"About Us"} />
          <NavbarBtn text={"Contact"} />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
