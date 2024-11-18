import React from "react";
import SocialLinks from "./Navbar/SocialLinks";

const Footer = () => {
  return (
    <footer>
      <div className="relative flex flex-col items-center justify-center bg-gray-900 text-white lg:flex-row">
        <span>© 2023</span>
        <span style={{ color: "#10cab7", paddingInline: "4px" }}>
          {" "}
          Abdelrahman{" "}
        </span>
        <span>All Right Reserved</span>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
