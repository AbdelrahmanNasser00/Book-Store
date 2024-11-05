import React from "react";
import { useNavigate } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddToCartBtn from "../../shared/components/AddToCartBtn";
import { addBookToWishlist, fetchBookDetails } from "../../api";
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
      className="w-full max-w-64 cursor-pointer rounded-lg border-solid shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
      onClick={handleProductpage}
    >
      {/* Book Image */}
      <div className="relative p-2">
        <img
          className="max-h-80 w-full object-cover"
          src={book.image || defaultImage}
          alt="Book Cover"
        />
        <div
          className="absolute right-3 top-3 rounded-full bg-sky-50 bg-opacity-50 p-2 text-sky-800 transition-all duration-300 ease-in-out hover:!bg-sky-800 hover:text-sky-50"
          onClick={(e) => {
            e.stopPropagation();
            handleWishlist(book.bookId);
          }}
        >
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>

      {/* book details */}
      <div className="p-2">
        <p className="truncate p-1 text-sm font-semibold text-sky-800">
          {book.name}
        </p>
        <div className="flex justify-between p-2">
          <div className="mt-1 flex items-center p-2">
            <span className="mb-0 text-xl font-medium text-gray-700">
              {book.price} <span className="text-sm">LE</span>
            </span>
            {/* <span className="mb-0 ml-1 text-xs text-red-600">
              <s>{350}</s>
            </span> */}
          </div>
          <AddToCartBtn book={book} />
        </div>
        {/* <Button /> */}
      </div>
    </div>
  );
};

export default BookCard;
