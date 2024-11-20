import React, { useState } from "react";
import OrderDetailsStatus from "./OrderDetailsStatus";
import ProductsList from "../../pages/Checkout/ProductsList";
import { Tooltip } from "@mui/material";

const OrderDetailsModal = ({ order, onClose, onUpdateStatus }) => {
  const [orderStatus, setOrderStatus] = useState(order.orderStatus);
  const [isEditingOrderStatus, setIsEditingOrderStatus] = useState(false);

  const [paymentStatus, setPaymentStatus] = useState(order.paymentStatus);
  const [isEditingPaymentStatus, setIsEditingPaymentStatus] = useState(false);

  const handleSaveOrderStatus = () => {
    // onUpdateStatus(order._id, { type: "order", status: orderStatus });
    setIsEditingOrderStatus(false);
  };

  const handleSavePaymentStatus = () => {
    // onUpdateStatus(order._id, { type: "payment", status: paymentStatus });
    setIsEditingPaymentStatus(false);
  };

  return (
    <div className="fixed inset-0 flex h-full items-center justify-center overflow-auto bg-gray-800 bg-opacity-75 transition-all duration-200">
      <div className="flex h-full w-full max-w-screen-lg flex-col gap-3 overflow-auto bg-gray-50 shadow-lg md:max-h-[768px] md:w-2/3 md:rounded-lg lg:h-fit lg:flex-row">
        <div className="w-full p-6">
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            Order Details
          </h2>
          <div className="space-y-4 border-t border-gray-200 pt-3 text-left">
            <div>
              <strong>Order ID:</strong>
              <span className="ml-2 rounded-md bg-purple-600 bg-opacity-25 p-1 text-sm font-medium text-purple-600">
                {order._id}
              </span>
            </div>
            <div>
              <strong>Customer Name:</strong>
              <span className="ml-2 rounded-md bg-purple-600 bg-opacity-25 p-1 text-sm font-medium text-purple-600">
                {order.name}
              </span>
            </div>
            <div>
              <strong>Customer Email:</strong>
              <span className="ml-2 rounded-md bg-purple-600 bg-opacity-25 p-1 text-sm font-medium text-purple-600">
                {order.email}
              </span>
            </div>
            <div>
              <strong>Delivery Address:</strong>
              <span className="ml-2 rounded-md bg-purple-600 bg-opacity-25 p-1 text-sm font-medium text-purple-600">
                {order.fullAddress}
              </span>
            </div>
            <div>
              <strong>Total Price:</strong>
              <span className="ml-2 rounded-md bg-red-500 bg-opacity-25 p-1 text-sm font-medium text-red-600">
                {order.totalAmount} EGP
              </span>
            </div>
            <div>
              <strong>Payment Method:</strong>
              <span className="ml-2 rounded-md bg-green-500 bg-opacity-25 p-1 text-sm font-medium text-green-600">
                {order.paymentMethod}
              </span>
            </div>
            <OrderDetailsStatus
              OrderOrPaymentStatus="Order Status"
              isEditingStatus={isEditingOrderStatus}
              status={orderStatus}
              setStatus={setOrderStatus}
              handleSaveStatus={handleSaveOrderStatus}
              setIsEditingStatus={setIsEditingOrderStatus}
            />
            <OrderDetailsStatus
              OrderOrPaymentStatus="Payment Status"
              isEditingStatus={isEditingPaymentStatus}
              status={paymentStatus}
              setStatus={setPaymentStatus}
              handleSaveStatus={handleSavePaymentStatus}
              setIsEditingStatus={setIsEditingPaymentStatus}
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
