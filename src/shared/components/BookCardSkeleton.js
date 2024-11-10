import React from "react";
const BookCardSkeleton = () => {
  return (
    <>
      <div className="flex w-64 justify-center shadow-sm">
        <div className="w-full max-w-64 animate-pulse rounded-lg p-4 shadow-sm">
          <div className="mb-4 h-80 w-full rounded-lg bg-gray-300"></div>
          <div className="mb-2 h-6 w-3/4 rounded-full bg-gray-300"></div>
          <div className="mb-2 h-6 w-1/2 rounded-full bg-gray-300"></div>
          <div className="mt-4 flex justify-between">
            <div className="h-10 w-20 rounded-full bg-gray-300"></div>
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
      <div className="flex w-64 justify-center shadow-sm">
        <div className="w-full max-w-64 animate-pulse rounded-lg p-4 shadow-sm">
          <div className="mb-4 h-80 w-full rounded-lg bg-gray-300"></div>
          <div className="mb-2 h-6 w-3/4 rounded-full bg-gray-300"></div>
          <div className="mb-2 h-6 w-1/2 rounded-full bg-gray-300"></div>
          <div className="mt-4 flex justify-between">
            <div className="h-10 w-20 rounded-full bg-gray-300"></div>
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
      <div className="flex w-64 justify-center shadow-sm">
        <div className="w-full max-w-64 animate-pulse rounded-lg p-4 shadow-sm">
          <div className="mb-4 h-80 w-full rounded-lg bg-gray-300"></div>
          <div className="mb-2 h-6 w-3/4 rounded-full bg-gray-300"></div>
          <div className="mb-2 h-6 w-1/2 rounded-full bg-gray-300"></div>
          <div className="mt-4 flex justify-between">
            <div className="h-10 w-20 rounded-full bg-gray-300"></div>
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
      <div className="flex w-64 justify-center shadow-sm">
        <div className="w-full max-w-64 animate-pulse rounded-lg p-4 shadow-sm">
          <div className="mb-4 h-80 w-full rounded-lg bg-gray-300"></div>
          <div className="mb-2 h-6 w-3/4 rounded-full bg-gray-300"></div>
          <div className="mb-2 h-6 w-1/2 rounded-full bg-gray-300"></div>
          <div className="mt-4 flex justify-between">
            <div className="h-10 w-20 rounded-full bg-gray-300"></div>
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCardSkeleton;
