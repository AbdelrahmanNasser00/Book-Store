import React from "react";

const NavbarBtn = (props) => {
  const { text, adminRole } = props;
  return (
    <div className="my-1 cursor-pointer px-3 font-normal text-sky-900 transition-all duration-300 hover:text-sky-500">
      {text}
    </div>
  );
};

export default NavbarBtn;
