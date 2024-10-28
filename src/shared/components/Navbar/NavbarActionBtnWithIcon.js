import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarActionBtnWithIcon = ({ icon, text, purpose, badge, onClick }) => {
  return (
    <button className="relative mx-2 cursor-pointer rounded-full bg-sky-100 bg-opacity-50 p-2 text-sm text-sky-800 shadow-sm transition-all duration-300 ease-in-out hover:bg-sky-800 hover:text-sky-50">
      {/* Icon and text */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          onClick && onClick();
        }}
      >
        {icon}
        {text}
      </div>

      {/* Badge */}
      {badge && (
        <span className="absolute -right-0 -top-0 flex h-5 w-5 items-center justify-center rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
};

export default NavbarActionBtnWithIcon;
