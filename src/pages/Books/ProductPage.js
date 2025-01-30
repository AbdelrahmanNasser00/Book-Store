import React, { useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/UI/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/CartSlice";
import Navbar from "../../components/Navbar/Navbar";
import { addToCart, fetchBooks } from "./../../api";
import { loadBooks } from "../../store/BookSlice";
import toast, { Toaster } from "react-hot-toast";
import useFetchCart from "../../hooks/useFetchCart";
import ReviewSection from "./ReviewSection";
import RelatedProductsSection from "./RelatedProductsSection";
import { AuthContext } from "../../context/AuthContext";
import Footer from "../../components/Footer";

const ProductPage = () => {
  const { cart, loading: cartLoading, error: cartError } = useFetchCart();
  const { currentUser } = useContext(AuthContext);
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  const location = useLocation();
  const { state: book } = location;

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetchBooks();
        dispatch(loadBooks(response.data.books));
      } catch (err) {
        console.log(err.message);
      }
    };
    getBooks();
  }, [dispatch]);

  const relatedProducts = useMemo(() => {
    if (book) {
      return books.filter(
        (b) => b.category === book.category && b.bookId !== book._id,
      );
    }
    return [];
  }, [book, books]);

  const handleAddToCart = async () => {
    try {
      if (currentUser !== "guest") {
        await addToCart({ bookId: book._id, quantity: 1 }, currentUser);
      }
      dispatch(addProduct({ ...book, quantity: 1 }));
      toast.success("Book added to cart");
    } catch (err) {
      console.error(err);
    }
  };
  const handleBuyNow = async () => {
    try {
      if (currentUser !== "guest") {
        await addToCart({ bookId: book._id, quantity: 1 }, currentUser);
      }
      dispatch(addProduct({ ...book, quantity: 1 }));
      toast.success("Book added to cart");
      window.location.href = "/checkout";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-7xl p-6">
        {/* Breadcrumb */}
        <Breadcrumb category={book.category} bookName={book.title} />

        {/* Product Details Section */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:flex">
          {/* Book Image */}
          <div className="flex w-full max-w-md justify-start">
            <img
              src={book.image}
              alt={book.name}
              className="h-auto w-full rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Book Information */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">{book.name}</h1>
            <p className="text-2xl font-semibold text-blue-600">
              {book.price} EGP
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                className="rounded-lg bg-blue-500 px-6 py-2 font-medium text-white shadow transition hover:bg-blue-600"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="rounded-lg bg-gray-800 px-6 py-2 font-medium text-white shadow transition hover:bg-gray-900"
              >
                Buy Now
              </button>
              <button className="rounded-lg border border-blue-500 px-6 py-2 font-medium text-blue-500 shadow transition hover:bg-blue-500 hover:text-white">
                Add to Wishlist
              </button>
            </div>
            <p className="text-sm text-gray-700">
              <strong>Categories:</strong>{" "}
              {Array.isArray(book.category)
                ? book.category.join(", ")
                : book.category}
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              <strong>Description:</strong> {book.description}
            </p>
          </div>
        </div>

        {/* Related Products Section */}
        <RelatedProductsSection relatedProducts={relatedProducts} />

        {/* Reviews Section */}
        <ReviewSection />
      </div>
      <Footer />
      <Toaster />
    </>
  );
};

export default ProductPage;
