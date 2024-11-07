import React, { useEffect } from "react";
import BooksCardsContainer from "../Books/BooksCardsContainer";
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navbar/Navbar";

const Home = () => {
  useEffect(() => {
    initMDB({ Dropdown, Collapse });
  }, []);

  return (
    <>
      <Navbar />
      {/* <HomePageBackground /> */}
      <BooksCardsContainer />
      <Footer />
    </>
  );
};

export default Home;
