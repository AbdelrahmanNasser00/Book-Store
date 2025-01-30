import React from "react";
import ProductsFilter from "./ProductsFilter";

const DealOfDayAndFilter = ({ filter, setFilter }) => {
  return (
    <div className="mx-5 flex items-center justify-center">
      <div className="flex w-full max-w-screen-xl flex-col justify-between md:flex-row lg:items-center lg:px-4">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-600">
            Deal of the <span className="text-indigo-500">Day</span>
          </h2>
          <p className="text-sm font-thin text-gray-500">
            Don’t wait. The time will never be just right.
          </p>
        </div>
        <ProductsFilter filter={filter} setFilter={setFilter} />
      </div>
    </div>
  );
};

export default DealOfDayAndFilter;
