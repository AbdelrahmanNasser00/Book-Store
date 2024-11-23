import { Tooltip } from "@mui/material";
import React from "react";

const OrderDetailsStatus = ({
  OrderOrPaymentStatus,
  isEditingStatus,
  status,
  setStatus,
  handleSaveStatus,
  setIsEditingStatus,
}) => {
  const OrderStatus = ["pending", "shipped", "completed", "canceled"];
  const PaymentStatus = ["pending", "paid", "failed"];
  const statusOptions =
    OrderOrPaymentStatus === "Order Status" ? OrderStatus : PaymentStatus;
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

  const currentStatusColor = statusColors[OrderOrPaymentStatus][status] || "";

  return (
    <div>
      <strong>{OrderOrPaymentStatus}:</strong>{" "}
      {isEditingStatus ? (
        <div className="flex items-center gap-2">
          <select
            defaultValue={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-lg border border-gray-300 p-2"
          >
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={handleSaveStatus}
          >
            Save
          </button>
          <button
            className="rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-400"
            onClick={() => setIsEditingStatus(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span
            className={`rounded-lg px-2 py-1 ${
              currentStatusColor || "bg-gray-300"
            } text-white`}
          >
            {status}
          </span>
          <Tooltip arrow title="Edit" placement="right">
            <button
              className="mx-1 rounded-lg bg-cyan-500 p-1 text-sm text-white shadow-md hover:bg-cyan-700"
              onClick={() => setIsEditingStatus(true)}
            >
              Edit
            </button>
          </Tooltip>
        </>
      )}
    </div>
  );
};

export default OrderDetailsStatus;
