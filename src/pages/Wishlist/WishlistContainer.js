import React, { useEffect } from "react";
import Breadcrumb from "../../components/UI/Breadcrumb";
import Footer from "../../components/Footer";
import { useWishlist } from "../../hooks/useWishlist";
import BookCard from "../../components/Books/BookCard";

const WishlistContainer = () => {
  const { wishlist, loading, getWishlist } = useWishlist();

  useEffect(() => {
    getWishlist();
  }, [getWishlist]);

  return (
    <>
      <section className="container mx-auto min-h-screen px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb category="Wishlist" bookName={""} />

        <header className="mb-8 text-start">
          <h1 className="text-2xl font-bold capitalize md:text-3xl">
            My Wishlist
          </h1>
          <p className="mt-2 text-gray-600">
            Browse the books you've added to your wishlist.
          </p>
        </header>

        <div>
          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="loader h-12 w-12 animate-spin rounded-full border-t-4 border-gray-400"></div>
            </div>
          )}
          {!loading && wishlist.length === 0 && (
            <p className="text-center text-gray-600">
              Your wishlist is currently empty.
            </p>
          )}
          {!loading && wishlist.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {wishlist.map((book) => (
                <BookCard key={book.bookId} book={book} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WishlistContainer;
