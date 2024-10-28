import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NavbarActionBtnWithIcon from "./NavbarActionBtnWithIcon";
import SideCart from "../SideCart";
import { AuthContext } from "../../../context/AuthContext";

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
    <div className="flex items-start">
      <NavbarActionBtnWithIcon
        icon={<FavoriteBorderIcon />}
        onClick={() => handleNavigate("wishlist")}
      />
      {!currentUser && (
        <NavbarActionBtnWithIcon
          icon={<PersonOutlineOutlinedIcon />}
          text={"Login/Register"}
          onClick={() => handleNavigate("login")}
        />
      )}
      {currentUser && (
        <NavbarActionBtnWithIcon
          icon={<PersonOutlineOutlinedIcon />}
          text={"Logout"}
          onClick={handleLogout}
        />
      )}

      <NavbarActionBtnWithIcon
        icon={<ShoppingCartOutlinedIcon />}
        badge={
          <Badge
            badgeContent={productQuantity}
            color="primary"
            style={{ padding: "5px" }}
          ></Badge>
        }
        text={parseInt(totalPrice) + "EGP"}
        onClick={() => handleNavigate("cart")}
      />
      {isCartVisible && <SideCart isOpen={isCartVisible} />}
    </div>
  );
};

export default NavbarActionsButtons;
