import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mb-4">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 hover:text-blue-700">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
