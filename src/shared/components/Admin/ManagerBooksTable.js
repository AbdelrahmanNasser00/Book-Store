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
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Authors</th>
          <th scope="col">Categories</th>
          <th scope="col">Number Of Pages</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody className="table-group-divider table-divider-color">
        {books.map((book) => (
          <TableRow key={book.bookId} book={book} />
        ))}
      </tbody>
    </table>
  );
};
export default ManagerBooksTable;
