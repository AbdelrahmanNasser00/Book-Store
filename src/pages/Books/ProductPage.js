import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Breadcrump from "../../shared/components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "./BookCard";
import ReviewsContainer from "./ReviewsContainer";
import ReviewForm from "./ReviewForm";
import { addProduct } from "../../store/CartSlice";
import Navbar from "../../shared/components/Navbar/Navbar";

const ProductPage = () => {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();

  const location = useLocation();
  const { state: book } = location;

  const relatedProducts = useMemo(() => {
    if (book) {
      return books.filter(
        (b) => b.category === book.category && b._id !== book._id,
      );
    }
    return [];
  }, [book, books]);
  console.log(relatedProducts);
  const handleAddToCart = (e) => {
    dispatch(addProduct({ ...book, quantity: 1 }));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <Breadcrump category={book.category} bookName={book.name} />

        {/* Product Detail */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="w-full">
            <img
              src={book.image}
              alt={book.name}
              className="h-auto w-full rounded-lg shadow-md"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">{book.name}</h1>
            <p className="text-xl font-semibold text-orange-500">
              {book.price} {book.currency}
            </p>

            {/* CTA Buttons */}
            <div className="space-x-3">
              <button
                className="rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
              <button className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800">
                Buy now
              </button>
              <button className="rounded border border-orange-500 px-4 py-2 text-orange-500 hover:bg-orange-500 hover:text-white">
                Add to wishlist
              </button>
            </div>

            <p className="text-sm text-gray-600">
              <strong>SKU:</strong> {book.sku}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Categories:</strong>{" "}
              {Array.isArray(book.category)
                ? book.category.join(", ")
                : book.category}
            </p>
            <p className="text-sm text-gray-600">
              {" "}
              <strong>Description:</strong> {book.description}
            </p>
          </div>
        </div>

        {/* Related books */}
        <div className="mt-12">
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            Related books
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {relatedProducts.map((relatedProduct, index) => (
              <BookCard book={relatedProduct} key={relatedProduct._id} />
            ))}
          </div>
        </div>
      </div>
      <ReviewForm />
      <ReviewsContainer />
    </>
  );
};

export default ProductPage;
