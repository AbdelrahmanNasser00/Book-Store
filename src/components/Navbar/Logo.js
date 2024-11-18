import React from "react";
import darkLogo from "../../assets/imgs/GitBook - Dark.svg";
const Logo = ({ width }) => {
  return (
    <div className="my-2 flex items-center justify-center">
      <a href="/" style={{ width: `${width}rem` }}>
        <img src={darkLogo} alt="Logo" />
      </a>
    </div>
  );
};

export default Logo;
