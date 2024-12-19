import React from "react";

const BookSkeleton = () => {
  return (
    <div className="relative h-full w-80 animate-pulse cursor-pointer rounded-lg border border-solid border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg">
      {/* Book Image Placeholder */}
      <div className="relative overflow-hidden rounded-t-lg">
        <div className="flex h-80 w-full items-center justify-center border-b border-solid border-gray-300 bg-gray-300">
          {/* Placeholder for the book image */}
          <div className="h-60 w-full bg-gray-300"></div>
        </div>
      </div>

      <div className="flex h-auto flex-col justify-between rounded-lg bg-white p-4 pb-2">
        {/* Title Placeholder */}
        <div className="mb-2 line-clamp-1 h-5 w-3/4 rounded bg-gray-300"></div>

        {/* Rating Placeholder */}
        <div className="mt-3 lg:flex">
          <div className="h-4 w-20 rounded bg-gray-300"></div>
        </div>

        {/* Price Placeholder */}
        <div className="flex items-center py-2">
          <div className="h-5 w-1/4 rounded bg-gray-300"></div>
          <div className="ml-2 h-5 w-1/4 rounded bg-gray-300 line-through"></div>
        </div>

        {/* Add to Cart Button Placeholder */}
        <div className="h-10 w-full rounded bg-gray-300"></div>
      </div>
    </div>
  );
};

export default BookSkeleton;
