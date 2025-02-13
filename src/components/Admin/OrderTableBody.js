import { Tooltip } from "@mui/material";
import React from "react";
import { useOrders } from "../../hooks/useOrders";
const statusColors = {
  "Order Status": {
    pending: "bg-yellow-200 text-yellow-800",
    shipped: "bg-blue-200 text-blue-800",
    completed: "bg-green-200 text-green-800",
    canceled: "bg-red-200 text-red-800",
  },
  "Payment Status": {
    pending: "bg-yellow-200 text-yellow-800",
    paid: "bg-green-200 text-green-800",
    failed: "bg-red-200 text-red-800",
  },
};
const OrderTableBody = ({ order, handleViewDetails }) => {
  const { deleteOrder } = useOrders();
  const orderStatusColor =
    statusColors["Order Status"][order.orderStatus.toLowerCase()] || "";
  const paymentStatusColor =
    statusColors["Payment Status"][order.paymentStatus.toLowerCase()] || "";

  const handleDeleteOrder = (orderId) => {
    deleteOrder(orderId);
  };

  return (
    <tbody>
      <tr className="hover:bg-gray-50" key={order._id}>
        <td className="border-b border-gray-200 px-4 py-2">{order._id}</td>
        <td className="border-b border-gray-200 px-4 py-2">{order.name}</td>
        <td className="border-b border-gray-200 px-4 py-2">
          {order.totalAmount}
        </td>

        <td className="border-b border-gray-200 px-4 py-2">
          {new Date(order.orderDate).toLocaleDateString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </td>
        <td className="border-b border-gray-200 px-4 py-2">
          <span
            className={`${paymentStatusColor} rounded-lg px-2 py-1 text-sm`}
          >
            {order.paymentStatus}
          </span>
        </td>
        <td className="border-b border-gray-200 px-4 py-2">
          <span className={`${orderStatusColor} rounded-lg px-2 py-1 text-sm`}>
            {order.orderStatus}
          </span>
        </td>

        <td className="border-b border-gray-200 text-center">
          <Tooltip arrow title="Delete" placement="left">
            <button
              className="rounded-lg bg-red-600 p-1 text-sm text-white shadow-md hover:bg-red-700"
              onClick={() => handleDeleteOrder(order._id)}
            >
              Delete
            </button>
          </Tooltip>
          <Tooltip arrow title="View Details" placement="right">
            <button
              className="mx-1 rounded-lg bg-cyan-500 p-1 text-sm text-white shadow-md hover:bg-cyan-700"
              onClick={() => handleViewDetails(order)}
            >
              View Details
            </button>
          </Tooltip>
        </td>
      </tr>
    </tbody>
  );
};

export default OrderTableBody;
