import SearchedBookCard from "./SearchedBookCard";
const SearchedItems = ({ filteredBooks }) => {
  return (
    <div
      className="absolute z-10 mt-[0px] overflow-hidden rounded-md border-white shadow-lg"
      style={{
        left: "calc(35px / 1.5)",
        right: "calc(35px / 1.5)",
      }}
    >
      <div className="custom-scrollbar grid max-h-80 grid-cols-2 overflow-auto border-gray-300 bg-white">
        {filteredBooks.map((book) => (
          <SearchedBookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default SearchedItems;
