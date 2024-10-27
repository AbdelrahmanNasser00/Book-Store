import React from "react";

const NavbarIcon = ({ icon, text, badge, onClick }) => {
  return (
    <div className="relative mx-2 cursor-pointer rounded-full border bg-sky-50 bg-opacity-50 p-2 text-sky-800 transition-all duration-300 ease-in-out hover:bg-sky-800 hover:text-sky-50">
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
    </div>
  );
};

export default NavbarIcon;
