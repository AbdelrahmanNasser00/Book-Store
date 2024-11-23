import React from "react";

const OrderInfo = ({ order }) => {
  return (
    <>
      {[
        { label: "Order ID", value: order._id },
        { label: "Customer Name", value: order.name },
        { label: "Customer Email", value: order.email },
        { label: "Delivery Address", value: order.fullAddress },
        { label: "Total Price", value: `${order.totalAmount} EGP` },
        { label: "Payment Method", value: order.paymentMethod },
      ].map(({ label, value }, idx) => (
        <div key={idx}>
          <strong>{label}</strong>
          <span className="ml-2 rounded-md bg-purple-600 bg-opacity-25 p-1 text-sm font-medium text-purple-600">
            {value}
          </span>
        </div>
      ))}
    </>
  );
};

export default OrderInfo;
