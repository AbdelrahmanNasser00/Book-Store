import React, { useEffect } from "react";
import BooksCardsContainer from "../Books/BooksCardsContainer";
import Navbar from "../../shared/components/Navbar";
import HomePageBackground from "../../shared/components/HomePageBackground";
import SecondaryNavbar from "../../shared/components/SecondaryNavbar";
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import Footer from "../../shared/components/Footer";
import Announcement from "../../shared/components/Announcement";

const Home = () => {
  useEffect(() => {
    initMDB({ Dropdown, Collapse });
  }, []);

  return (
    <div>
      <Announcement />
      <Navbar />
      <HomePageBackground />
      <SecondaryNavbar />
      <BooksCardsContainer />
      <Footer />
    </div>
  );
};

export default Home;
