import React, { useContext } from "react";
import CheckoutInputField from "../shared/components/CheckoutInputField";
import CheckoutContext from "../context/CheckoutContext";

const CheckoutForm = () => {
  const { formData, handleInputChange } = useContext(CheckoutContext);

  return (
    <div className="flex w-full max-w-screen-sm flex-col p-8">
      <div className="flex flex-col items-stretch">
        <CheckoutInputField
          label={"Your Name"}
          type={"text"}
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          placeholder={"Name"}
        />
        <CheckoutInputField
          label={"Full Address"}
          type={"text"}
          placeholder={"Address"}
          value={formData.fullAddress}
          onChange={(e) => handleInputChange("fullAddress", e.target.value)}
        />
        <CheckoutInputField
          label={"Email Address"}
          type={"email"}
          placeholder={"Email"}
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        <CheckoutInputField
          label={"Phone number"}
          type={"tel"}
          placeholder={"Phone number"}
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
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
            value={formData.notes}
            onChange={(e) => handleInputChange("notes", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
