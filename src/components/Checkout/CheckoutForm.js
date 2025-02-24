import React from "react";
import { useContext } from "react";
import CheckoutContext from "../../context/CheckoutContext";

const CheckoutForm = () => {
  const { register, errors } = useContext(CheckoutContext);

  return (
    <div className="flex w-full max-w-screen-sm flex-col p-8">
      <div className="flex flex-col items-stretch">
        <div className="mb-4">
          <label className="mb-2 block font-bold text-gray-700">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("name")}
            className={`w-full rounded-md border p-2 outline-none transition-all duration-200 ${
              errors.name
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:!border-indigo-600 focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-20"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-bold text-gray-700">
            Full Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("fullAddress")}
            className={`w-full rounded-md border p-2 outline-none transition-all duration-200 ${
              errors.fullAddress
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:!border-indigo-600 focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-20"
            }`}
            placeholder="Enter your address"
          />
          {errors.fullAddress && (
            <p className="mt-1 text-sm text-red-600">
              {errors.fullAddress.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-bold text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register("email")}
            className={`w-full rounded-md border p-2 outline-none transition-all duration-200 ${
              errors.email
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:!border-indigo-600 focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-20"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-bold text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            {...register("phoneNumber")}
            className={`w-full rounded-md border p-2 outline-none transition-all duration-200 ${
              errors.phoneNumber
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:!border-indigo-600 focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-20"
            }`}
            placeholder="Enter your phone number"
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-sm text-red-600">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-bold text-gray-700">
            Governorate <span className="text-red-500">*</span>
          </label>
          <select
            {...register("governorate")}
            className={`w-full rounded-md border p-2 outline-none transition-all duration-200 ${
              errors.governorate
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:!border-indigo-600 focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-20"
            }`}
          >
            {egyptGovernorates.map((governorate) => (
              <option key={governorate} value={governorate}>
                {governorate}
              </option>
            ))}
          </select>
          {errors.governorate && (
            <p className="mt-1 text-sm text-red-600">
              {errors.governorate.message}
            </p>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <label className="mb-2 block font-bold text-gray-700">
            Country / Region
          </label>
          <strong>Egypt</strong>
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-bold text-gray-700">
            Order Notes
          </label>
          <textarea
            {...register("notes")}
            className={`w-full rounded-md border p-2 outline-none transition-all duration-200 ${
              errors.notes
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:!border-indigo-600 focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-20"
            }`}
            placeholder="Notes about your order, e.g., special notes for delivery."
          />
          {errors.notes && (
            <p className="mt-1 text-sm text-red-600">{errors.notes.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

const egyptGovernorates = [
  "Cairo",
  "Alexandria",
  "Giza",
  "Qalyubia",
  "Port Said",
  "Suez",
  "Sharqia",
  "Dakahlia",
  "Beheira",
  "Minya",
  "Helwan",
  "Assiut",
  "Sohag",
  "Beni Suef",
  "Faiyum",
  "Aswan",
  "Damietta",
  "Luxor",
  "Qena",
  "Gharbia",
  "Ismailia",
  "Matruh",
  "Red Sea",
  "New Valley",
  "North Sinai",
  "South Sinai",
  "Monufia",
  "Kafr el-Sheikh",
];
