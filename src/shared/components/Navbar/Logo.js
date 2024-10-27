import React from "react";
import darkLogo from "../../imgs/GitBook - Dark.svg";

const Logo = () => {
  return (
    <div className="max-w-[190px] lg:max-w-[190px]">
      <a href="/">
        <div className="flex items-center">
          <img src={darkLogo} alt="" />
        </div>
      </a>
    </div>
  );
};

export default Logo;
