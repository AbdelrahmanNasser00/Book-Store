import React from "react";
import "../CSS/home.css";
import BackGroundImg from "../imgs/bookStore-home.svg";
const HomePageBackground = () => {
  return (
    <div className="home-page-background">
      <img
        src={BackGroundImg}
        alt="home img"
        className="home-page-background-img"
      />
    </div>
  );
};
export default HomePageBackground;
