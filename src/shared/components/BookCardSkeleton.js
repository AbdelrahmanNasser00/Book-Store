import React from "react";

const BookCardSkeleton = () => {
  return (
    <div className="relative w-52 animate-pulse cursor-pointer rounded-lg border border-solid border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg">
      {/* Image Placeholder */}
      <div className="relative h-64 w-full overflow-hidden rounded-t-lg bg-gray-300"></div>

      {/* Book details placeholder */}
      <div className="bg-white p-4">
        {/* Title Placeholder */}
        <div className="mb-2 h-4 w-3/4 rounded bg-gray-300"></div>

        {/* Price and Button Placeholder */}
        <div className="flex items-center justify-between">
          <div className="h-4 w-1/4 rounded bg-gray-300"></div>
          <div className="h-8 w-8 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default BookCardSkeleton;
