import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/UI/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "./BookCard";
import ReviewsContainer from "./ReviewsContainer";
import ReviewForm from "./ReviewForm";
import { addProduct } from "../../store/CartSlice";
import Navbar from "../../components/Navbar/Navbar";

const ProductPage = () => {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  const location = useLocation();
  const { state: book } = location;

  const relatedProducts = useMemo(() => {
    if (book) {
      return books.filter(
        (b) => b.category === book.category && b.bookId !== book._id,
      );
    }
    return [];
  }, [book, books]);

  const handleAddToCart = () => {
    dispatch(addProduct({ ...book, quantity: 1 }));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        {/* Breadcrumb */}
        <Breadcrumb category={book.category} bookName={book.name} />

        {/* Product Details Section */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Book Image */}
          <div className="mx-auto flex w-full max-w-md justify-start">
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
              {book.price} {book.currency}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                className="rounded-lg bg-blue-500 px-6 py-2 font-medium text-white shadow transition hover:bg-blue-600"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button className="rounded-lg bg-gray-800 px-6 py-2 font-medium text-white shadow transition hover:bg-gray-900">
                Buy Now
              </button>
              <button className="rounded-lg border border-blue-500 px-6 py-2 font-medium text-blue-500 shadow transition hover:bg-blue-500 hover:text-white">
                Add to Wishlist
              </button>
            </div>

            {/* Additional Details */}
            <p className="text-sm text-gray-700">
              <strong>SKU:</strong> {book.sku}
            </p>
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
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Related Books
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {relatedProducts.map((relatedProduct) => (
              <BookCard book={relatedProduct} key={relatedProduct.bookId} />
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Customer Reviews
          </h2>
          <ReviewForm />
          <ReviewsContainer />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
