import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SortIcon from "@mui/icons-material/Sort";

const ProductsFilter = ({ filter, setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "default", label: "Default" },
    { value: "priceLowToHigh", label: "Price: Low to High" },
    { value: "priceHighToLow", label: "Price: High to Low" },
  ];

  const handleOptionClick = (value) => {
    setFilter(value);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-xl py-5">
        <div className="relative w-[220px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full items-center justify-between rounded-lg border bg-white px-4 py-2 text-left shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="flex items-center gap-2">
              <SortIcon className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-700">
                {options.find((opt) => opt.value === filter)?.label ||
                  "Sort by..."}
              </span>
            </div>
            <KeyboardArrowDownIcon
              className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                isOpen ? "rotate-180 transform" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute z-10 mt-1 w-full rounded-lg border bg-white shadow-lg">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionClick(option.value)}
                  className={`w-full px-4 py-2 text-left text-sm first:rounded-t-lg last:rounded-b-lg hover:bg-gray-50 ${
                    filter === option.value
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;
