import React from "react";

const BookImage = ({ loading, error, selectedBook }) => {
  if (loading) {
    return (
      <div className="flex h-[400px] w-full max-w-md items-center justify-center">
        <div className="loader h-12 w-12 animate-spin rounded-full border-t-4 border-gray-400"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex w-full max-w-md justify-start">
        <div className="flex h-[600px] w-full items-center justify-center rounded-lg bg-gray-100">
          <p className="text-center text-red-500">Failed to load image.</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="flex w-full max-w-md justify-start">
        <img
          src={selectedBook?.image}
          alt={selectedBook?.name}
          className="h-auto min-h-[400px] w-full rounded-lg object-cover"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default BookImage;
