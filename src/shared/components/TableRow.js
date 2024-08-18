import { MDBBtn } from "mdb-react-ui-kit";
import { deleteBook } from "../../store/BookSlice";
import { useDispatch } from "react-redux";
const TableRow = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{book.isbn}</td>
      <td>{book.price}</td>
      <td>{book.quantity}</td>
      <td>
        <MDBBtn color="danger" size="sm" onClick={() => dispatch(deleteBook())}>
          Delete
        </MDBBtn>
        <MDBBtn color="Primary" size="sm" onClick={() => console.log(book)}>
          Edit
        </MDBBtn>
      </td>
    </tr>
  );
};
export default TableRow;
