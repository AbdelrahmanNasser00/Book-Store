import React, { useState } from "react";
import OrderDetailsModal from "./OrderDetailsModal";
import UseFetchOrders from "../../hooks/useFetchOrders";
import OrderTableBody from "./OrderTableBody";
import OrderTableHead from "./OrderTableHead";

const OrdersTable = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const {
    orders,
    pagination,
    loading: ordersLoading,
    error: ordersError,
  } = UseFetchOrders();
  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };
  console.log(orders);

  const closeModal = () => {
    setSelectedOrder(null);
  };
  return (
    <>
      <table className="min-w-full rounded-lg border border-gray-200 bg-white">
        <OrderTableHead />
        {orders.map((order) => (
          <OrderTableBody
            key={order._id}
            order={order}
            handleViewDetails={handleViewDetails}
          />
        ))}
      </table>
      {selectedOrder && (
        <OrderDetailsModal order={selectedOrder} onClose={closeModal} />
      )}
    </>
  );
};

export default OrdersTable;
