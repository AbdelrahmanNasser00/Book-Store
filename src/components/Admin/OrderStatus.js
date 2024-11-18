import React from "react";

const OrderStatus = ({ order }) => {
  console.log(order?.orderStatus);
  const statusOptions = ["Pending", "Shipped", "Completed", "Cancelled"];

  return (
    <div className="relative">
      <select
        className="w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-gray-100 p-2 text-gray-700 transition duration-300 hover:bg-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        defaultValue={order.orderStatus}
      >
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <svg
          className="h-4 w-4 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M5.5 7.5L10 12l4.5-4.5" />
        </svg>
      </div>
    </div>
  );
};

export default OrderStatus;
