import React, { createContext, useState } from "react";

export const NavContext = createContext();
export const NavContextProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <NavContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </NavContext.Provider>
  );
};
