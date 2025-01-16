import React, { useContext } from "react";
import NavLinksBtn from "./NavLinksBtn";
import { AuthContext } from "../../context/AuthContext";
import { NavContext } from "../../context/NavContext";
import CloseIcon from "@mui/icons-material/Close";

const NavigationLinks = () => {
  const { currentUser } = useContext(AuthContext);
  const { openMenu, setOpenMenu } = useContext(NavContext);
  const handleClose = () => {
    setOpenMenu(false);
  };

  const navigationLinks = [
    { text: "Home", path: "/" },
    { text: "Software Engineering", path: "/software-engineering" },
    { text: "Data Science", path: "/data-science" },
    { text: "Technology", path: "/technology" },
    { text: "Cybersecurity", path: "/cybersecurity" },
    { text: "Management", path: "/management" },
    { text: "About Us", path: "/about-us" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className="hidden lg:flex lg:justify-center">
        {navigationLinks.map((link, index) => (
          <NavLinksBtn
            key={index}
            text={link.text}
            path={link.path}
            purpose={link.path}
          />
        ))}
        {currentUser &&
          currentUser !== "guest" &&
          currentUser.userDetails.role === "admin" && (
            <NavLinksBtn text={"Dashboard"} path={"/dashboard"} />
          )}
      </div>

      <div
        className={`fixed left-0 top-0 z-10 min-h-screen w-1/2 transform shadow-md transition-transform duration-300 ease-in-out md:w-1/3 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex min-h-screen flex-col items-center bg-white">
          <button
            onClick={() => handleClose(!openMenu)}
            className="mb-4 self-end rounded-full text-blue-600"
          >
            <CloseIcon />
          </button>
          {navigationLinks.map((link, index) => (
            <NavLinksBtn
              key={index}
              text={link.text}
              path={link.path}
              purpose={link.path}
            />
          ))}
          {currentUser &&
            currentUser !== "guest" &&
            currentUser.userDetails.role === "admin" && (
              <NavLinksBtn text={"Dashboard"} path={"/dashboard"} />
            )}
        </div>
      </div>
    </>
  );
};

export default NavigationLinks;
