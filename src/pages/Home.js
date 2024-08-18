import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BooksCardsContainer from "./Books/BooksCardsContainer";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import axios from "axios";

const Home = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <BooksCardsContainer />
    </div>
  );
};

export default Home;
