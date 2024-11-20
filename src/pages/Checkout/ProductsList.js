import React from "react";
import bookImg from "../../assets/imgs/book.png";
const ProductsList = ({ products }) => {
  return (
    <div className="w-full space-y-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md"
        >
          <img
            src={product.image || bookImg}
            alt={product.name}
            className="mr-4 h-16 w-16 rounded-md bg-gray-200 object-cover"
          />
          <div className="flex-1">
            <h5 className="text-sm font-semibold">{product.name}</h5>
            <p className="text-xs">Price: {product.price} EGP</p>
            <p className="text-xs">Quantity: {product.quantity}</p>
          </div>
          <span className="text-sm font-bold">
            {product.price * product.quantity} EGP
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
