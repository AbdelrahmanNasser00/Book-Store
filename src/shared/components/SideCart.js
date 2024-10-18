import React from "react";

const Cart = ({ isOpen }) => {
  return (
    <>
      {/* Shopping Cart Container */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/5 bg-white shadow-lg z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Shopping cart</h2>
          <button className="text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Cart Item 1 */}
          <div className="flex justify-between items-start mb-4">
            <img
              src="path/to/book1.jpg"
              alt="Bioinformatics for Dummies"
              className="w-16 h-20 object-cover"
            />
            <div className="ml-4">
              <h3 className="text-sm font-semibold">
                Bioinformatics for Dummies
              </h3>
              <p className="text-sm">
                1 x <span className="text-orange-600 font-bold">349 EGP</span>
              </p>
            </div>
            <button className="text-gray-500 hover:text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* More cart items can be added here... */}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Subtotal:</span>
            <span className="text-lg font-bold text-orange-600">788 EGP</span>
          </div>
          <div className="text-center text-sm mb-4">
            Add <span className="font-bold">1212 EGP</span> to cart and get free
            shipping!
          </div>
          <div className="relative w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="absolute top-0 left-0 h-2.5 bg-orange-600 rounded-full"
              style={{ width: "40%" }}
            />
          </div>
          <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-2 px-4 rounded mb-2">
            View cart
          </button>
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
