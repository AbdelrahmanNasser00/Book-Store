import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Breadcrumb = ({ category, bookName }) => {
  return (
    <nav className="mb-6 flex items-center text-sm text-gray-600">
      <HomeIcon className="mr-2 text-gray-500" />
      <a href="/" className="cursor-pointer hover:text-indigo-500">
        Home
      </a>
      <ChevronRightIcon className="mx-2 text-gray-500" />
      <a href={`/${category}`} className="cursor-pointer hover:text-indigo-500">
        {category}
      </a>
      <ChevronRightIcon className="mx-2 text-gray-500" />
      <span className="font-bold">{bookName}</span>
    </nav>
  );
};

export default Breadcrumb;
