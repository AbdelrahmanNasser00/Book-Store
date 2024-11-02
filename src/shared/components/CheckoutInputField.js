import React from "react";

const CheckoutInputField = ({ label, type, placeholder }) => {
  return (
    <div className="mb-3">
      <label
        className="mb-1 block text-sm font-bold text-gray-700"
        htmlFor="name"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        id="name"
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 p-2 focus:border-sky-500 focus:outline-none"
      />
    </div>
  );
};

export default CheckoutInputField;
