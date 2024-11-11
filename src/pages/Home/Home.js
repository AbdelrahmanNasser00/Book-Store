import React from "react";
import BooksCardsContainer from "../Books/BooksCardsContainer";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="bg-home-color min-h-screen w-full">
      <Navbar />
      <BooksCardsContainer />
      <Footer />
    </div>
  );
};

export default Home;
