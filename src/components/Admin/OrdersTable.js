import React, { useState } from "react";
import OrderDetailsModal from "./OrderDetailsModal";
import UseFetchOrders from "../../hooks/useFetchOrders";
import OrderStatus from "./OrderStatus";
import OrderBody from "./OrderBody";
import OrderHead from "./OrderHead";

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

  const closeModal = () => {
    setSelectedOrder(null);
  };
  return (
    <>
      <table className="min-w-full rounded-lg border border-gray-200 bg-white">
        <OrderHead />
        {orders.map((order) => (
          <OrderBody
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
