import React from "react";
import OrderDetailsStatus from "./OrderDetailsStatus";
import ProductsList from "../../pages/Checkout/ProductsList";
import { Tooltip } from "@mui/material";
import OrderInfo from "./OrderInfo";
import useUpdateOrderDetails from "../../hooks/useUpdateOrderDetails";

const OrderDetailsModal = ({ order, onClose }) => {
  const {
    orderStatus,
    setOrderStatus,
    isEditingOrderStatus,
    setIsEditingOrderStatus,
    paymentStatus,
    setPaymentStatus,
    isEditingPaymentStatus,
    setIsEditingPaymentStatus,
    handleSaveStatus,
  } = useUpdateOrderDetails(order);

  const handleSaveStatusWithDispatch = (type) => {
    handleSaveStatus(type);
  };

  return (
    <div className="fixed inset-0 flex h-full items-center justify-center overflow-auto bg-gray-800 bg-opacity-75 transition-all duration-200">
      <div className="flex h-full w-full max-w-screen-lg flex-col gap-3 overflow-auto bg-gray-50 shadow-lg md:max-h-[768px] md:w-2/3 md:rounded-lg lg:h-fit lg:flex-row">
        <div className="w-full p-6">
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            Order Details
          </h2>
          <div className="space-y-4 border-t border-gray-200 pt-3 text-left">
            <OrderInfo order={order} />
            <OrderDetailsStatus
              OrderOrPaymentStatus="Order Status"
              isEditingStatus={isEditingOrderStatus}
              status={orderStatus}
              setStatus={setOrderStatus}
              setIsEditingStatus={setIsEditingOrderStatus}
              handleSaveStatus={() => handleSaveStatusWithDispatch("order")}
            />
            <OrderDetailsStatus
              OrderOrPaymentStatus="Payment Status"
              isEditingStatus={isEditingPaymentStatus}
              status={paymentStatus}
              setStatus={setPaymentStatus}
              setIsEditingStatus={setIsEditingPaymentStatus}
              handleSaveStatus={() => handleSaveStatusWithDispatch("payment")}
            />
          </div>
          <Tooltip arrow title="Close">
            <button
              className="mt-4 w-full rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              onClick={onClose}
            >
              Close
            </button>
          </Tooltip>
        </div>
        <div className="w-full bg-gray-200">
          <div className="h-full p-6">
            <h2 className="mb-2 text-xl font-bold text-gray-800">
              Order Items:
            </h2>
            <ProductsList products={order.items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
