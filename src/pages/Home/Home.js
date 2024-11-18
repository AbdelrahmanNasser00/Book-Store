import React from "react";
import BooksCardsContainer from "../Books/BooksCardsContainer";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-home-color">
      <Navbar />
      <BooksCardsContainer />
      <Footer />
    </div>
  );
};

export default Home;
