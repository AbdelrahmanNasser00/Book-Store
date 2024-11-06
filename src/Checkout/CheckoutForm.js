import React from "react";
import CheckoutInputField from "../shared/components/CheckoutInputField";

const CheckoutForm = () => {
  return (
    <form className="flex w-1/2 flex-col">
      <CheckoutInputField
        label={"Your Name"}
        type={"text"}
        placeholder={"Name"}
      />
      <CheckoutInputField
        label={"Full Address"}
        type={"text"}
        placeholder={"Address"}
      />
      <CheckoutInputField
        label={"Email Address"}
        type={"email"}
        placeholder={"Email"}
      />
      <CheckoutInputField
        label={"Mobile"}
        type={"tel"}
        placeholder={"Mobile"}
      />

      <div className="mb-4">
        <label
          className="mb-2 block font-bold text-gray-700"
          htmlFor="governorate"
        >
          Governorate <span className="text-red-500">*</span>
        </label>
        <select
          id="governorate"
          className="w-full rounded-md border border-gray-300 p-2 focus:border-sky-500 focus:outline-none"
        >
          <option>Cairo</option>
          <option>Assiut</option>
        </select>
      </div>
      <div className="mb-4 flex flex-col">
        <label>Country / Region</label>
        <strong>Egypt</strong>
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block font-bold text-gray-700"
          htmlFor="order-notes"
        >
          Order notes
        </label>
        <textarea
          id="order-notes"
          placeholder="Notes about your order, e.g., special notes for delivery."
          className="w-full rounded-md border border-gray-300 p-2 focus:border-sky-500 focus:outline-none"
        />
      </div>
      <div className="mb-4 flex justify-center">
        <button
          className="w-1/4 rounded-lg bg-blue-700 text-white transition-all duration-300 hover:bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
