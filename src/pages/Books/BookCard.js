import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/CartSlice";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const BookCard = ({ book }) => {
  const defaultImage = "https://via.placeholder.com/300x400?text=No+Image";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProductpage = (e) => {
    e.stopPropagation();
    navigate(`/product/${book._id}`, { state: book });
  };
  const handleAddToCart = (e) => {
    e.stopPropagation();

    dispatch(addProduct({ ...book, quantity: 1 }));
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
          onClick={(e) => e.stopPropagation()}
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
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-800 text-sky-800 transition-all duration-300 hover:scale-95 hover:bg-sky-800 hover:text-sky-50"
            onClick={handleAddToCart}
          >
            <ShoppingCartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
