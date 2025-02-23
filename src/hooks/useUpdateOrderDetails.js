import { useState } from "react";
import { useOrders } from "./useOrders";

const useOrderDetails = (order) => {
  const [orderStatus, setOrderStatus] = useState(order?.orderStatus);
  const [isEditingOrderStatus, setIsEditingOrderStatus] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(order?.paymentStatus);
  const [isEditingPaymentStatus, setIsEditingPaymentStatus] = useState(false);

  const { updateOrderStatus } = useOrders();

  const handleSaveStatus = async (type) => {
    try {
      await updateOrderStatus(order?._id, {
        paymentStatus: paymentStatus || order?.paymentStatus,
        orderStatus: orderStatus || order?.orderStatus,
      });
    } catch (error) {
      console.error("Failed to update order status", error);
    }
    if (type === "order") setIsEditingOrderStatus(false);
    if (type === "payment") setIsEditingPaymentStatus(false);
  };
  return {
    orderStatus,
    setOrderStatus,
    isEditingOrderStatus,
    setIsEditingOrderStatus,
    paymentStatus,
    setPaymentStatus,
    isEditingPaymentStatus,
    setIsEditingPaymentStatus,
    handleSaveStatus,
  };
};

export default useOrderDetails;
