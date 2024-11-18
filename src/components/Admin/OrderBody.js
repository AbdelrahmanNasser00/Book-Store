import { Tooltip } from "@mui/material";
import React from "react";

const OrderBody = ({ order, handleViewDetails }) => {
  const statusOptions = ["Pending", "Shipped", "Completed", "Cancelled"];

  return (
    <tbody>
      <tr className="hover:bg-gray-50" key={order._id}>
        <td className="border-b border-gray-200 px-4 py-2">{order._id}</td>
        <td className="border-b border-gray-200 px-4 py-2">{order.name}</td>
        <td className="border-b border-gray-200 px-4 py-2">
          {order.totalAmount}
        </td>
        <td className="border-b border-gray-200 px-4 py-2">
          {order.paymentStatus}
        </td>
        <td className="border-b border-gray-200 px-4 py-2">
          {new Date(order.orderDate).toLocaleDateString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
          {/* {order.orderDate} */}
        </td>
        <td className="border-b border-gray-200 px-4 py-2">
          {order.orderStatus}
        </td>

        <td className="border-b border-gray-200">
          <Tooltip arrow title="Delete">
            <button className="rounded-lg bg-red-600 p-1 text-sm text-white shadow-md hover:bg-red-700">
              Delete
            </button>
          </Tooltip>
          <Tooltip arrow title="View Details">
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

export default OrderBody;
