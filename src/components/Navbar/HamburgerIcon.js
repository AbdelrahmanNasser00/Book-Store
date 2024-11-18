import React, { useContext } from "react";
import { NavContext } from "../../context/NavContext";
import MenuIcon from "@mui/icons-material/Menu";

const HamburgerIcon = () => {
  const { openMenu, setOpenMenu } = useContext(NavContext);

  return (
    <div className="flex items-center space-x-2 xl:hidden">
      <button
        className="rounded-md p-1 text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <MenuIcon />
      </button>
    </div>
  );
};

export default HamburgerIcon;
