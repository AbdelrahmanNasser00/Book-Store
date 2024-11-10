import React from "react";

const OrderDetailsModal = ({ order, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Order Details</h2>
        <div className="text-left">
          <p>
            <strong>Order ID:</strong> {order.id}
          </p>
          <p>
            <strong>Customer Name:</strong> {order.customerName}
          </p>
          <p>
            <strong>Total Price:</strong> ${order.totalPrice}
          </p>
          <p>
            <strong>Status:</strong> {order.status}
          </p>
          {/* Add more order details as needed */}
        </div>
        <button
          className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
