import React, { useContext, useEffect, useMemo } from "react";
import { useToast } from "../../context/ToastContext";
import { useBooks } from "../../hooks/useBooks";
import { AuthContext } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/UI/Breadcrumb";
import Navbar from "../../components/Navbar/Navbar";
import ReviewSection from "./ReviewSection";
import RelatedProductsSection from "./RelatedProductsSection";
import Footer from "../../components/Footer";
import BookImage from "./BookImage";
import BookInfo from "./BookInfo";
import { useCart } from "../../hooks/useCart";
import { addGuestProduct } from "../../store/CartSlice";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  const location = useLocation();
  const { showToast } = useToast();
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);
  const bookId = location.state;
  const { books, selectedBook, loading, error, getBooks, getBookById } =
    useBooks();
  const { addItem } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([getBookById(bookId), getBooks()]);
    };
    fetchData();
  }, [getBooks, bookId, getBookById]);

  const relatedProducts = useMemo(() => {
    if (selectedBook) {
      return books
        .filter(
          (b) =>
            b.category === selectedBook.category &&
            b.bookId !== selectedBook._id,
        )
        .slice(0, 6);
    }

    return [];
  }, [selectedBook, books]);

  const handleAddToCart = async () => {
    try {
      if (currentUser !== "guest") {
        await addItem({ bookId: selectedBook._id, quantity: 1 });
      }
      dispatch(addGuestProduct({ ...selectedBook, quantity: 1 }));
      showToast("Book added to cart");
    } catch (err) {
      showToast("Failed to add book to cart", "fail");
    }
  };

  const handleBuyNow = async () => {
    try {
      if (currentUser !== "guest") {
        await addItem({ bookId: selectedBook._id, quantity: 1 });
      }
      dispatch(addGuestProduct({ ...selectedBook, quantity: 1 }));
      showToast("Book added to cart");
      window.location.href = "/checkout";
    } catch (err) {
      showToast("Failed to add book to cart", "fail");
    }
  };
  if (loading) {
    return (
      <div className="m-auto flex h-screen w-full max-w-md items-center justify-center">
        <div className="loader h-12 w-12 animate-spin rounded-full border-t-4 border-gray-400"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-7xl p-6">
        {/* Breadcrumb */}
        <Breadcrumb
          category={selectedBook?.category}
          bookName={selectedBook?.title}
        />

        {/* Product Details Section */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:flex">
          {/* Book Image */}
          <BookImage
            loading={loading}
            error={error}
            selectedBook={selectedBook}
          />

          {/* Book Information */}
          <BookInfo
            selectedBook={selectedBook}
            handleAddToCart={handleAddToCart}
            handleBuyNow={handleBuyNow}
          />
        </div>
        {/* Related Products Section */}
        <RelatedProductsSection relatedProducts={relatedProducts} />

        {/* Reviews Section */}
        <ReviewSection />
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
