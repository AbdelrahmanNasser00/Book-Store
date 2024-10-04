import React from "react";
import { Link } from "react-router-dom";
const Breadcrump = ({ category, bookName }) => {
  console.log(category);
  return (
    <nav className="text-sm text-gray-600 mb-6">
      <Link to="/" className="hover:text-orange-500">
        Home
      </Link>
      {" / "}
      <Link to={`/${category}`} className="hover:text-orange-500">
        {category}
      </Link>
      {" / "}
      <span className="font-bold">{bookName}</span>
    </nav>
  );
};
export default Breadcrump;
