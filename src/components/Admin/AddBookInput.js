import React from "react";

const AddBookInput = ({ label, type, value, onChange, attention }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        className="h-10 w-full rounded-md border border-gray-200 px-2 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-200 focus:!border focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-20"
        value={value}
        onChange={onChange}
        required
      />
      <small className="text-sm text-red-500">{attention}</small>
    </div>
  );
};

export default AddBookInput;
