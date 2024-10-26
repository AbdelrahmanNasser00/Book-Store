import React from "react";

const Spinner = () => {
  return (
    <div className="container mt-5 flex h-screen justify-center">
      <div className="flex flex-row gap-2">
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-700 [animation-delay:.7s]" />
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-700 [animation-delay:.3s]" />
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-700 [animation-delay:.7s]" />
      </div>
    </div>
  );
};

export default Spinner;
