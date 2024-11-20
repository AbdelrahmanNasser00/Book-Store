import React from "react";

const OrderTableHead = () => {
  return (
    <thead>
      <tr className="bg-gray-100 text-gray-700">
        <th className="border-b border-gray-200 px-4 py-2 text-start">
          Order ID
        </th>
        <th className="border-b border-gray-200 px-4 py-2 text-start">User</th>
        <th className="border-b border-gray-200 px-4 py-2 text-start">
          Total Amount
        </th>
        <th className="border-b border-gray-200 px-4 py-2 text-start">Date</th>
        <th className="border-b border-gray-200 px-4 py-2 text-start">
          Payment Status
        </th>
        <th className="border-b border-gray-200 px-4 py-2 text-start">
          Order Status
        </th>
        <th className="border-b border-gray-200 px-4 py-2 text-start">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default OrderTableHead;
