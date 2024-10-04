import React, { useEffect } from "react";
import BooksCardsContainer from "../Books/BooksCardsContainer";
import Navbar from "../../shared/components/Navbar";
import HomePageBackground from "../../shared/components/HomePageBackground";
import SecondaryNavbar from "../../shared/components/SecondaryNavbar";
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";

const Home = () => {
  useEffect(() => {
    initMDB({ Dropdown, Collapse });
  }, []);

  return (
    <div>
      <Navbar />
      <HomePageBackground />
      <SecondaryNavbar />
      <BooksCardsContainer />
    </div>
  );
};

export default Home;
