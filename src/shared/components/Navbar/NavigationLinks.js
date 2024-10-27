import React, { useContext } from "react";
import NavLinksBtn from "./NavLinksBtn";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const NavigationLinks = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleNavigate = (endpoint) => navigate(`/${endpoint}`);

  const navigationLinks = [
    { text: "Home", path: "" },
    { text: "Software Engineering", path: "software-engineering" },
    { text: "Data Science", path: "data-science" },
    { text: "Technology", path: "technology" },
    { text: "Cybersecurity", path: "cybersecurity" },
    { text: "Management", path: "management" },
    { text: "About Us", path: "about-us" },
    { text: "Contact", path: "contact" },
  ];
  return (
    <div className="d-flex align-items-center mb-1 mt-3">
      {navigationLinks.map((link, index) => (
        <NavLinksBtn
          key={index}
          text={link.text}
          onClick={() => handleNavigate(link.path)}
          purpose={link.path}
        />
      ))}
      {currentUser && currentUser.userDetails.role === "admin" && (
        <NavLinksBtn
          text={"Dashboard"}
          onClick={() => handleNavigate("dashboard")}
        />
      )}
    </div>
  );
};

export default NavigationLinks;
