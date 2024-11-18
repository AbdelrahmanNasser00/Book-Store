import SearchedBookCard from "./SearchedBookCard";
const SearchedItems = ({ books }) => {
  return (
    <div className="absolute z-10 mt-[1px] w-full overflow-hidden rounded-md border-white bg-white shadow-lg">
      <div className="custom-scrollbar grid max-h-80 grid-cols-1 overflow-auto border-gray-300 bg-white">
        {books.map((book) => (
          <SearchedBookCard key={book.bookId} book={book} />
        ))}
      </div>
      {books.length > 0 ? (
        <button className="h-full w-full text-sm font-normal hover:bg-gray-100">
          View All
        </button>
      ) : (
        <div className="h-full w-full p-4 text-sm font-medium hover:bg-gray-100">
          No products found
        </div>
      )}
    </div>
  );
};

export default SearchedItems;
