import { useSelector } from "react-redux";
import TableRow from "./TableRow";

const ManagerBooksTable = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Genre</th>
          <th scope="col">ISBN</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody className="table-group-divider table-divider-color">
        {books.map((book) => (
          <TableRow book={book} />
        ))}
      </tbody>
    </table>
  );
};
export default ManagerBooksTable;
