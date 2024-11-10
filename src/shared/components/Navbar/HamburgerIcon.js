import React, { useContext } from "react";
import { NavContext } from "../../../context/NavContext";

const HamburgerIcon = () => {
  const { openMenu, setOpenMenu } = useContext(NavContext);

  return (
    <div class="flex items-center space-x-2 xl:hidden">
      <button
        class="rounded-md p-1 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:hover:bg-gray-800 dark:focus:bg-gray-800"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-6 w-6 text-gray-700 dark:text-gray-300"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default HamburgerIcon;
