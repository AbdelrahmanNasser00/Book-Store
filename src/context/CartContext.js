import React, { createContext, useContext, useEffect } from "react";
import { useCart } from "../hooks/useCart";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const { getCart } = useCart();

  useEffect(() => {
    if (currentUser !== "guest") {
      getCart();
    }
  }, [currentUser, getCart]);

  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
