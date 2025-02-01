import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { addBookToWishlist, fetchBookDetails } from "../../api";
import AddToCartBtn from "../../components/UI/AddToCartBtn";
import { Rating } from "@mui/material";
import { useToast } from "../../context/ToastContext";
import { AuthContext } from "../../context/AuthContext";

const BookCard = ({ book }) => {
  const defaultImage = "https://via.placeholder.com/300x400?text=No+Image";
  const { currentUser } = useContext(AuthContext);
  const { showToast } = useToast();
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
    if (currentUser === "guest") {
      window.location.href = "/login";
    }
    try {
      const response = await addBookToWishlist(bookId);
      if (response.error) {
        throw new response.error();
      } else {
        showToast("Book added to wishlist");
      }
    } catch (err) {
      showToast("Failed to add book to wishlist", "Fail");
    }
  };

  return (
    <div
      className="relative h-full w-full cursor-pointer rounded-lg border border-solid border-gray-300 shadow-sm transition-all duration-300 hover:shadow-lg"
      onClick={handleProductpage}
    >
      {/* Book Image */}
      <div className="relative overflow-hidden rounded-t-lg">
        <div className="flex h-80 w-full items-center justify-center border-b border-solid border-gray-300">
          <img
            className="h-60 object-cover shadow-lg transition-all duration-300 hover:scale-105"
            src={book.image || defaultImage}
            alt="Book Cover"
          />
        </div>

        <div
          className="absolute right-3 top-3 rounded-full bg-indigo-500/20 p-2 text-indigo-500 transition-all duration-300 ease-in-out hover:bg-indigo-500 hover:text-indigo-200"
          onClick={(e) => {
            e.stopPropagation();
            handleWishlist(book.bookId);
          }}
        >
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>

      <div className="flex h-auto flex-col justify-between rounded-lg bg-white p-4 pb-2">
        <p className="line-clamp-1 text-sm font-semibold capitalize tracking-wide text-gray-600">
          {book.name}
        </p>
        <div className="mt-3 lg:flex">
          <Rating
            name="half-rating"
            precision={1}
            size="small"
            readOnly
            value={4}
            onChange={(event, value) => {}}
          />
        </div>
        <div className="flex items-center py-2">
          <span className="text-base font-semibold text-gray-500">
            {book.price} <span className="text-xs">LE</span>
          </span>
          <span className="ml-2 text-xs font-medium text-gray-500 line-through">
            {book.price + 15} <span className="text-xs">LE</span>
          </span>
        </div>
        <AddToCartBtn book={book} />
      </div>
    </div>
  );
};

export default BookCard;
