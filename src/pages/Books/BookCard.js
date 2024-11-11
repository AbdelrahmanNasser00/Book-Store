import React from "react";
import { useNavigate } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddToCartBtn from "../../shared/components/AddToCartBtn";
import { addBookToWishlist, fetchBookDetails } from "../../api";
import TestBtn from "../../shared/components/TestBtn";
const BookCard = ({ book }) => {
  const defaultImage = "https://via.placeholder.com/300x400?text=No+Image";
  const navigate = useNavigate();

  const handleProductpage = async (e) => {
    e.stopPropagation();
    const response = await fetchBookDetails(book.bookId);
    if (response.err) {
      console.log(response.err);
    } else {
      navigate(`/product/${book.bookId}`, { state: response.data.book });
    }
  };
  const handleWishlist = async (bookId) => {
    const response = await addBookToWishlist({ bookId: bookId });
    if (response.err) {
      console.log(response.err);
    }
  };

  return (
    <div
      className="relative w-full max-w-64 cursor-pointer rounded-lg border border-solid border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg"
      onClick={handleProductpage}
    >
      {/* Book Image */}
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          className="h-64 w-full rounded-t-lg object-cover transition-all duration-300 hover:scale-105"
          src={book.image || defaultImage}
          alt="Book Cover"
        />
        <div
          className="hover:!bg-logo-color absolute right-3 top-3 rounded-full bg-gray-200 bg-opacity-50 p-2 text-gray-700 transition-all duration-300 ease-in-out hover:text-sky-50"
          onClick={(e) => {
            e.stopPropagation();
            handleWishlist(book.bookId);
          }}
        >
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>

      {/* book details */}
      <div className="flex h-1/3 flex-1 flex-col justify-around rounded-lg bg-white p-4 pb-2">
        <p className="mb-2 font-sans text-sm text-gray-700">{book.name}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-sans text-base font-medium text-orange-500">
            {book.price} <span className="text-xs">LE</span>
          </span>
          <TestBtn book={book} />
          {/* <AddToCartBtn book={book} /> */}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
