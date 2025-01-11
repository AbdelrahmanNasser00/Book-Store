import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { addToCart } from "../api";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || "guest",
  );
  const login = async (inputs) => {
    try {
      const res = await axios.post(
        "https://realtime-lecturing-server.onrender.com/api/auth/login",
        inputs,
      );
      const userDetails = res.data;
      setCurrentUser(userDetails);
      await processGuestCart(userDetails);
    } catch (err) {
      console.error("Login failed:", err);
      throw err;
    }
  };
  const processGuestCart = async (userDetails) => {
    const guestCart = JSON.parse(localStorage.getItem("guestCart"));
    if (guestCart && guestCart.quantity > 0) {
      const promises = guestCart.products.map((product) =>
        addToCart(
          { bookId: product.bookId, quantity: product.quantity },
          userDetails,
        ),
      );
      await Promise.all(promises);
      console.log("Guest cart items added to user's cart:", guestCart.products);
      localStorage.removeItem("guestCart");
    }
  };

  const register = async (inputs) => {
    try {
      await axios.post(
        "https://realtime-lecturing-server.onrender.com/api/auth/register",
        inputs,
      );
    } catch (err) {
      console.error("Regiteration failed", err);
      throw err;
    }
  };

  const logout = () => {
    try {
      setCurrentUser("guest");
      localStorage.removeItem("user");
      localStorage.removeItem("guestCart");
    } catch (err) {
      console.error("Logout failed:", err);
      throw err;
    }
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
