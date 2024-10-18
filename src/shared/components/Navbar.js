import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../CSS/Navbar.css";
import { MDBBtn } from "mdb-react-ui-kit";
import HomeSearch from "./HomeSearch";
import SideCart from "./SideCart";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";

const CartBtnContainer = styled.div`
  border: 1px solid gray;
  border-radius: 30px;
`;
const CartBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
const CartText = styled.p`
  margin: 0;
`;
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
  return (
    <>
      {/* Navbar */}

      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        {/* Container wrapper */}
        <div className="container">
          <div className="flex items-center space-x-6">
            {currentUser?.userDetails?.role === "admin" && (
              <a
                href="/dashboard"
                className="text-gray-700 hover:text-orange-500">
                Dashboard
              </a>
            )}
          </div>
          <HomeSearch />
          {/* Toggle button */}
          <button
            data-mdb-collapse-init=""
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <a className="navbar-brand mt-2 mt-lg-0" href="/">
              <img
                className="custom-img-height"
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            {/* Left links */}
            <MDBBtn className="flex items-center space-x-6">
              {currentUser?.userDetails?.role === "admin" && (
                <a
                  href="/dashboard"
                  className="text-gray-700 hover:text-orange-500">
                  Dashboard
                </a>
              )}
            </MDBBtn>
            {/* Left links */}
          </div>

          {/* Right elements */}
          <div className="d-flex align-items-center">
            <CartBtnContainer onClick={handleCartVisibilty}>
              <CartBtn>
                <Badge
                  badgeContent={productQuantity}
                  color="primary"
                  style={{ padding: "5px" }}>
                  <ShoppingCartOutlinedIcon />
                  <CartText>{parseFloat(totalPrice).toFixed(2)} EGP</CartText>
                </Badge>
              </CartBtn>
            </CartBtnContainer>
            {isCartVisible && <SideCart isOpen={isCartVisible} />}

            {/* Avatar */}
            <div className="dropdown">
              <a
                data-mdb-dropdown-init=""
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                id="navbarDropdownMenuAvatar"
                href="/"
                role="button"
                aria-expanded="false">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="w-8 h-8 rounded-full"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar">
                <li>
                  <a className="dropdown-item" href="/">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Settings
                  </a>
                </li>
                <li onClick={handleLogout}>
                  <a className="dropdown-item">Logout</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};
export default Navbar;
