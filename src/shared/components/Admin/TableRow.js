import { MDBBtn } from "mdb-react-ui-kit";
// import { deleteBook } from "../../store/BookSlice";
import { useContext } from "react";
import { StoreManagerContext } from "../../../context/StoreManagerContext";
import { deleteBook } from "../../../api";
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
        <MDBBtn color="danger" size="sm" onClick={handleDeleteBook}>
          Delete
        </MDBBtn>
        <MDBBtn color="Primary" size="sm" onClick={handleEditBook}>
          Edit
        </MDBBtn>
      </td>
    </tr>
  );
};
export default TableRow;
