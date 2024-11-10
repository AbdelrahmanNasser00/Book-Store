import SearchedBookCard from "./SearchedBookCard";
const SearchedItems = ({ filteredBooks }) => {
  return (
    <div className="absolute z-10 mt-[0px] w-full overflow-hidden rounded-md border-white shadow-lg">
      <div className="custom-scrollbar grid max-h-80 grid-cols-1 overflow-auto border-gray-300 bg-white">
        {filteredBooks.map((book) => (
          <SearchedBookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default SearchedItems;
