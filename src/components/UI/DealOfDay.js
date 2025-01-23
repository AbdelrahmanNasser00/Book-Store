import React from "react";

const DealOfDay = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-xl py-5 pl-3">
        <h2 className="text-2xl font-semibold text-gray-600">
          Deal of the <span className="text-indigo-500">Day</span>
        </h2>
        <p className="text-sm font-thin text-gray-500">
          Don’t wait. The time will never be just right.
        </p>
      </div>
    </div>
  );
};

export default DealOfDay;
