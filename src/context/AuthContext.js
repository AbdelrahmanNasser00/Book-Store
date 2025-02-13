import { createContext, useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import {
  loginApi,
  registerApi,
  setUserData,
  getUserData,
  removeUserData,
} from "../services/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { addItem } = useCart();
  const [currentUser, setCurrentUser] = useState(getUserData() || "guest");

  const login = async (inputs) => {
    try {
      const response = await loginApi(inputs);
      // const userDetails = response;

      setCurrentUser(response);
      setUserData(response);

      await processGuestCart(response);
    } catch (err) {
      console.error("Login failed:", err);
      throw err;
    }
  };

  const register = async (inputs) => {
    try {
      await registerApi(inputs);
    } catch (err) {
      console.error("Registration failed:", err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      setCurrentUser("guest");
      removeUserData();
      localStorage.removeItem("guestCart");
    } catch (err) {
      console.error("Logout failed:", err);
      throw err;
    }
  };

  const processGuestCart = async (userDetails) => {
    const guestCart = JSON.parse(localStorage.getItem("guestCart"));
    if (guestCart && guestCart.quantity > 0) {
      const promises = guestCart.products.map((product) =>
        addItem({ bookId: product.bookId, quantity: product.quantity }),
      );
      await Promise.all(promises);
      localStorage.removeItem("guestCart");
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
