import React from "react";

const BookInfo = ({ selectedBook, handleAddToCart, handleBuyNow }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">{selectedBook?.name}</h1>
      <p className="text-2xl font-semibold text-blue-600">
        {selectedBook?.price} EGP
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <button
          className="rounded-lg bg-blue-500 px-6 py-2 font-medium text-white shadow transition hover:bg-blue-600"
          onClick={() => handleAddToCart()}
        >
          Add to Cart
        </button>
        <button
          onClick={() => handleBuyNow()}
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
        {Array.isArray(selectedBook?.category)
          ? selectedBook?.category.join(", ")
          : selectedBook?.category}
      </p>
      <p className="text-sm leading-relaxed text-gray-700">
        <strong>Description:</strong> {selectedBook?.description}
      </p>
    </div>
  );
};

export default BookInfo;
