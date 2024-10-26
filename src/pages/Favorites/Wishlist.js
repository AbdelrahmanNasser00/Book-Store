import React from "react";
import Navbar from "../../shared/components/Navbar";
import WishlistContainer from "./WishlistContainer";
import Announcement from "../../shared/components/Announcement";

const Favorites = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <WishlistContainer />
    </>
  );
};

export default Favorites;
