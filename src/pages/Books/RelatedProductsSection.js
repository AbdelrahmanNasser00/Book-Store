import React from "react";
import BookCard from "./BookCard";

const RelatedProductsSection = ({ relatedProducts }) => {
  return (
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
  );
};

export default RelatedProductsSection;
