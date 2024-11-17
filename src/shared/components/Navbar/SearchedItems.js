import SearchedBookCard from "./SearchedBookCard";
const SearchedItems = ({ books }) => {
  return (
    <div className="absolute z-10 mt-[1px] w-full overflow-hidden rounded-md border-white shadow-lg">
      <div className="custom-scrollbar grid max-h-80 grid-cols-1 overflow-auto border-gray-300 bg-white">
        {books.map((book) => (
          <SearchedBookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default SearchedItems;
