import { MDBBtn } from "mdb-react-ui-kit";
// import { deleteBook } from "../../store/BookSlice";
import { useContext } from "react";
import { StoreManagerContext } from "../../../context/StoreManagerContext";
import { deleteBook } from "../../../api";
import styled from "styled-components";
const TableRow = ({ book }) => {
  const { setEditBookForm } = useContext(StoreManagerContext);

  const handleEditBook = () => {
    setEditBookForm(book);
  };
  const handleDeleteBook = async () => {
    try {
      await deleteBook(book.bookId);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tr>
      <td>{book.name}</td>
      <td>{book.authors}</td>
      <td>{book.category}</td>
      <td>{book.numberOfPages}</td>
      <td>{book.price}</td>
      <td>{book.quantity}</td>
      <td>
        <button
          className="rounded-lg bg-red-600 text-sm text-white shadow-md hover:bg-red-700"
          onClick={handleDeleteBook}
        >
          Delete
        </button>
        <button
          className="rounded-lg bg-cyan-500 text-sm text-white shadow-md hover:bg-cyan-700"
          onClick={handleEditBook}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};
export default TableRow;
