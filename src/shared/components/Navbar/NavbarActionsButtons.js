import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NavbarActionBtnWithIcon from "./NavbarActionBtnWithIcon";
import SideCart from "../SideCart";
import { AuthContext } from "../../../context/AuthContext";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const NavbarActionsButtons = (props) => {
  const { currentUser, logout } = useContext(AuthContext);
  const { productQuantity, totalPrice, isCartVisible } = props;
  const navigate = useNavigate();
  const handleNavigate = (endpoint) => navigate(`/${endpoint}`);
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="hidden lg:flex lg:items-center">
      <NavbarActionBtnWithIcon
        icon={<FavoriteBorderIcon />}
        onClick={() => handleNavigate("wishlist")}
      />
      {!currentUser ||
        (currentUser === "guest" && (
          <NavbarActionBtnWithIcon
            icon={<PersonOutlineOutlinedIcon />}
            text={"Login/Register"}
            onClick={() => handleNavigate("login")}
          />
        ))}
      {currentUser && currentUser !== "guest" && (
        <NavbarActionBtnWithIcon
          icon={<PersonOutlineOutlinedIcon />}
          text={"Logout"}
          onClick={handleLogout}
        />
      )}

      <NavbarActionBtnWithIcon
        icon={<ShoppingBagOutlinedIcon />}
        badge={
          <Badge
            badgeContent={productQuantity}
            color="primary"
            style={{ padding: "5px" }}
          ></Badge>
        }
        text={
          <>
            {parseInt(totalPrice)} <span className="text-[10px]">EGP</span>
          </>
        }
        onClick={() => handleNavigate("cart")}
      />
      {isCartVisible && <SideCart isOpen={isCartVisible} />}
    </div>
  );
};

export default NavbarActionsButtons;
