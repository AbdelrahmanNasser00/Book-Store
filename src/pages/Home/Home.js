import React, { useEffect } from "react";
import BooksCardsContainer from "../Books/BooksCardsContainer";
import Navbar from "../../shared/components/Navbar";
import HomePageBackground from "../../shared/components/HomePageBackground";
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import Footer from "../../shared/components/Footer";

const Home = () => {
  useEffect(() => {
    initMDB({ Dropdown, Collapse });
  }, []);

  return (
    <div>
      <Navbar />
      {/* <HomePageBackground /> */}
      <BooksCardsContainer />
      <Footer />
    </div>
  );
};

export default Home;
