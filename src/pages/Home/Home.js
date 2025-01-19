import React, { useEffect, useState } from "react";
import BooksCardsContainer from "../Books/BooksCardsContainer";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Carousel2 from "../../components/UI/Carousel2";
import Spinner from "../../components/UI/Spinner";
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Carousel2 />
      {/* <CarouselContainer /> */}
      <BooksCardsContainer />
      <Footer />
    </div>
  );
};

export default Home;
