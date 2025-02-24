import React, { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import AddToCartBtn from "../../components/UI/AddToCartBtn";
import { Rating } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import { useBooks } from "../../hooks/useBooks";
import { useWishlist } from "../../hooks/useWishlist";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const BookCard = ({ book }) => {
  const defaultImage = "https://via.placeholder.com/300x400?text=No+Image";
  const { currentUser } = useContext(AuthContext);
  const { clearBook } = useBooks();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

  const inWishlist = useMemo(() => {
    return isInWishlist(book.bookId);
  }, [book.bookId, isInWishlist]);

  const handleProductpage = (e) => {
    e.stopPropagation();
    clearBook();
    navigate(`/product/${book.bookId}`, { state: book.bookId });
  };
  const handleWishlist = async (bookId) => {
    if (currentUser === "guest") {
      window.location.href = "/login";
    }
    if (inWishlist) await removeFromWishlist(bookId);
    else await addToWishlist(book.bookId);
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
            loading="lazy"
          />
        </div>

        <div
          className={`absolute ${inWishlist ? "bg-indigo-500 text-gray-100 hover:text-indigo-200" : "bg-indigo-500/20 text-indigo-500"} right-3 top-3 rounded-full p-2 transition-all duration-300 ease-in-out hover:bg-indigo-500 hover:text-indigo-200`}
          onClick={(e) => {
            e.stopPropagation();
            handleWishlist(book.bookId);
          }}
        >
          {inWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
