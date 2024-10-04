import React from "react";
// import "../../shared/CSS/ProductPage.css";
import Navbar from "../../shared/components/Navbar";
import ProductRatingWithReview from "../../shared/components/ProductRatingWithReview";

const ProductCard = () => {
  const product = {
    title: "Biomedical Measurement Systems and Data Science",
    price: 329,
    currency: "EGP",
    sku: "23515",
    categories: ["Bioinformatics", "Data Science"],
    image: "https://itbook.store/img/books/9781098104030.png", // Replace with your image URL
    description: "Biomedical Measurement Systems and Data Science",
    relatedProducts: [
      {
        title: "Numerical Python",
        price: 469,
        image: "https://itbook.store/img/books/9781098104030.png",
      },
      {
        title: "Introducing Data Science",
        price: 289,
        image: "https://itbook.store/img/books/9781098104030.png",
      },
      {
        title: "Data Science on the Google Cloud Platform",
        price: 329,
        image: "https://itbook.store/img/books/9781098104030.png",
      },
      {
        title: "Python and R for the Modern Data Scientist",
        price: 239,
        image: "https://itbook.store/img/books/9781098104030.png",
      },
      {
        title: "97 Things Every Data Engineer Should Know",
        price: 269,
        image: "https://itbook.store/img/books/9781098104030.png",
      },
    ],
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
      {/* Product Image */}
      <img
        className="w-full h-64 object-cover p-4 rounded-t-lg"
        src="your-image-url.jpg"
        alt="product image"
      />
      {/* Product Content */}
      <div className="px-5 pb-5">
        {/* Product Title */}
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
        {/* Rating */}
        <div className="flex items-center justify-center mt-2.5 mb-5">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M9.049 2.927a1 1 0 011.902 0l1.223 3.758a1 1 0 00.95.69h3.946a1 1 0 01.593 1.81l-3.196 2.347a1 1 0 00-.364 1.118l1.223 3.758a1 1 0 01-1.54 1.118L10 13.848l-3.196 2.347a1 1 0 01-1.54-1.118l1.223-3.758a1 1 0 00-.364-1.118L3.927 9.185a1 1 0 01.593-1.81h3.946a1 1 0 00.95-.69l1.223-3.758z" />
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M9.049 2.927a1 1 0 011.902 0l1.223 3.758a1 1 0 00.95.69h3.946a1 1 0 01.593 1.81l-3.196 2.347a1 1 0 00-.364 1.118l1.223 3.758a1 1 0 01-1.54 1.118L10 13.848l-3.196 2.347a1 1 0 01-1.54-1.118l1.223-3.758a1 1 0 00-.364-1.118L3.927 9.185a1 1 0 01.593-1.81h3.946a1 1 0 00.95-.69l1.223-3.758z" />
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M9.049 2.927a1 1 0 011.902 0l1.223 3.758a1 1 0 00.95.69h3.946a1 1 0 01.593 1.81l-3.196 2.347a1 1 0 00-.364 1.118l1.223 3.758a1 1 0 01-1.54 1.118L10 13.848l-3.196 2.347a1 1 0 01-1.54-1.118l1.223-3.758a1 1 0 00-.364-1.118L3.927 9.185a1 1 0 01.593-1.81h3.946a1 1 0 00.95-.69l1.223-3.758z" />
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M9.049 2.927a1 1 0 011.902 0l1.223 3.758a1 1 0 00.95.69h3.946a1 1 0 01.593 1.81l-3.196 2.347a1 1 0 00-.364 1.118l1.223 3.758a1 1 0 01-1.54 1.118L10 13.848l-3.196 2.347a1 1 0 01-1.54-1.118l1.223-3.758a1 1 0 00-.364-1.118L3.927 9.185a1 1 0 01.593-1.81h3.946a1 1 0 00.95-.69l1.223-3.758z" />
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M9.049 2.927a1 1 0 011.902 0l1.223 3.758a1 1 0 00.95.69h3.946a1 1 0 01.593 1.81l-3.196 2.347a1 1 0 00-.364 1.118l1.223 3.758a1 1 0 01-1.54 1.118L10 13.848l-3.196 2.347a1 1 0 01-1.54-1.118l1.223-3.758a1 1 0 00-.364-1.118L3.927 9.185a1 1 0 01.593-1.81h3.946a1 1 0 00.95-.69l1.223-3.758z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
            5.0
          </span>
        </div>
        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">$599</span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
