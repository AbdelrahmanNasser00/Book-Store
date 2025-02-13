import React, { useEffect, useState } from "react";
import { useOrders } from "../../hooks/useOrders";
import OrderDetailsModal from "./OrderDetailsModal";
import OrderTableBody from "./OrderTableBody";
import OrderTableHead from "./OrderTableHead";

const OrdersTable = () => {
  const [selectedOrder, setSelectedOrder] = useState("");
  const { orders, getOrders } = useOrders();

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder("");
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
