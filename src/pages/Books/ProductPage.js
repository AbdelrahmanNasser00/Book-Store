import React from "react";
import Navbar from "../../shared/components/Navbar";
import { MDBBtn } from "mdb-react-ui-kit";
import { useLocation } from "react-router-dom";
import Breadcrump from "../../shared/components/Breadcrump";

const ProductPage = () => {
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
    ],
  };
  const location = useLocation();
  const { state: book } = location;
  console.log(book);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <Breadcrump category={book.category} bookName={book.name} />

        {/* Product Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <img
              src={book.image}
              alt={book.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">{book.name}</h1>
            <p className="text-xl font-semibold text-orange-500">
              {book.price} {book.currency}
            </p>

            {/* CTA Buttons */}
            <div className="space-x-3">
              <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                Add to cart
              </button>
              <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                Buy now
              </button>
              <button className="px-4 py-2 text-orange-500 border border-orange-500 rounded hover:bg-orange-500 hover:text-white">
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
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Related books
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {product.relatedProducts.map((relatedProduct, index) => (
              <div
                className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                key={index}>
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.title}
                  className="w-full h-auto rounded"
                />
                <p className="mt-2 text-sm text-gray-700">
                  {relatedProduct.title}
                </p>
                <p className="text-orange-500 font-semibold">
                  {relatedProduct.price} {product.currency}
                </p>
                <div className="d-flex justify-content-center mb-3 mt-auto">
                  <MDBBtn className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                    Add to cart
                  </MDBBtn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
