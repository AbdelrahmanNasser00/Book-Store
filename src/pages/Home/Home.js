import React from "react";
import BooksCardsContainer from "../Books/BooksCardsContainer";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import CarouselContainer from "../../components/UI/Carousel";
const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <CarouselContainer />
      <BooksCardsContainer />
      <Footer />
    </div>
  );
};

export default Home;
