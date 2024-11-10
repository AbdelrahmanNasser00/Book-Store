import React, { useState } from "react";
import { orders } from "../../../pages/AdminDashboard/ordersData";
import { MDBBtn } from "mdb-react-ui-kit";

const OrdersTable = () => {
  return (
    <>
      <table className="min-w-full rounded-lg border border-gray-200 bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="border-b border-gray-200 px-4 py-2">Order ID</th>
            <th className="border-b border-gray-200 px-4 py-2">User</th>
            <th className="border-b border-gray-200 px-4 py-2">Total Amount</th>
            <th className="border-b border-gray-200 px-4 py-2">Status</th>
            <th className="border-b border-gray-200 px-4 py-2">Date</th>
            <th className="border-b border-gray-200 px-4 py-2">Status</th>
            <th className="border-b border-gray-200 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr className="hover:bg-gray-50" key={order._id}>
              <td className="border-b border-gray-200 px-4 py-2">
                {order._id}
              </td>
              <td className="border-b border-gray-200 px-4 py-2">
                {order.user.name}
              </td>
              <td className="border-b border-gray-200 px-4 py-2">
                {order.total}
              </td>
              <td className="border-b border-gray-200 px-4 py-2">
                {order.status}
              </td>
              <td className="border-b border-gray-200 px-4 py-2">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
              <td className="border-b border-gray-200 px-4 py-2">
                <div className="relative">
                  <select className="w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-gray-100 p-2 text-gray-700 transition duration-300 hover:bg-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Delivered">Cancelled</option>
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
              </td>

              <td className="border-b border-gray-200 px-4 py-2">
                <MDBBtn color="danger" size="sm">
                  Delete
                </MDBBtn>
                <MDBBtn color="Primary" size="sm">
                  View Details
                </MDBBtn>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {selectedOrder && (
        <OrderDetailsModal order={selectedOrder} onClose={closeModal} />
      )} */}
    </>
  );
};

export default OrdersTable;
