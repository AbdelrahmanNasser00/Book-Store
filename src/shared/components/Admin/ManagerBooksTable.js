import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { fetchBooks } from "../../../api";

const ManagerBooksTable = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const response = await fetchBooks();
      if (response.error) {
        console.log(response.error);
      } else {
        setBooks(response.data.books);
      }
    };
    getBooks();
  }, []);

  return (
    <table className="min-w-full rounded-lg border border-gray-200 bg-white">
      <thead>
        <tr className="bg-gray-100 text-gray-700">
          <th className="border-b border-gray-200 px-4 py-2">Title</th>
          <th className="border-b border-gray-200 px-4 py-2">Authors</th>
          <th className="border-b border-gray-200 px-4 py-2">Categories</th>
          <th className="border-b border-gray-200 px-4 py-2">
            Number Of Pages
          </th>
          <th className="border-b border-gray-200 px-4 py-2">Price</th>
          <th className="border-b border-gray-200 px-4 py-2">Quantity</th>
          <th className="border-b border-gray-200 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody className="table-group-divider table-divider-color overflow-x-auto">
        {books.map((book) => (
          <TableRow key={book.bookId} book={book} />
        ))}
      </tbody>
    </table>
  );
};
export default ManagerBooksTable;
