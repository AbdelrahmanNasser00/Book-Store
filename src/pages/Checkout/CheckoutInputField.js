import React from "react";

const CheckoutInputField = ({ label, type, placeholder, value, onChange }) => {
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
        className="w-full rounded-md border border-gray-300 p-2 transition-all duration-300 ease-in-out focus:!border-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-20"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default CheckoutInputField;
