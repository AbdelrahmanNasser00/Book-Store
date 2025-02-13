import React, { useState } from "react";
import BooksCardsContainer from "../Books/BooksCardsContainer";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import Spinner from "../../components/UI/Spinner";
import DealOfDayAndFilter from "../../components/UI/DealOfDayAndFilter";
import CarouselContainer from "../../components/UI/Carousel";
const Home = () => {
  // const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 800);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Spinner />;
  // }
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <CarouselContainer />
      <DealOfDayAndFilter filter={filter} setFilter={setFilter} />
      <BooksCardsContainer filter={filter} />
      <Footer />
    </div>
  );
};

export default Home;
