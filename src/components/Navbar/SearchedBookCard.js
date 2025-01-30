import { useNavigate } from "react-router-dom";
import AddToCartBtn from "../UI/AddToCartBtn";
const SearchedBookCard = ({ book }) => {
  const navigate = useNavigate();

  const handleProductpage = (e) => {
    e.stopPropagation();
    navigate(`/product/${book.bookId}`, { state: book });
  };
  return (
    <div
      key={book.id}
      className="flex max-h-24 cursor-pointer justify-between border-b border-r border-gray-300 p-2 transition-all duration-300 ease-in hover:bg-gray-100"
      onClick={handleProductpage}
    >
      <div className="flex">
        <img
          src={book.image}
          alt={book.title}
          className="mr-3 max-h-28 max-w-16"
        />
        <div>
          <h3 className="text-sm text-gray-800">{book.title}</h3>
          <p className="text-sm text-gray-600">price: {book.price}LE</p>
        </div>
      </div>
      <div className="flex h-full items-center">
        {/* <TestBtn book={book} /> */}
        <AddToCartBtn book={book} />
      </div>
    </div>
  );
};

export default SearchedBookCard;
