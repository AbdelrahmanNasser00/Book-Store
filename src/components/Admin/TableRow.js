import { useContext } from "react";
import { StoreManagerContext } from "../../context/StoreManagerContext";
import { deleteBook } from "../../api";
import { Tooltip } from "@mui/material";
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
      <td className="border-b border-gray-200 px-4 py-2">{book.name}</td>
      <td className="border-b border-gray-200 px-4 py-2">{book.authors}</td>
      <td className="border-b border-gray-200 px-4 py-2">{book.category}</td>
      <td className="border-b border-gray-200 px-4 py-2">
        {book.numberOfPages}
      </td>
      <td className="border-b border-gray-200 px-4 py-2">{book.price}</td>
      <td className="border-b border-gray-200 px-4 py-2">{book.quantity}</td>
      <td className="border-b border-gray-200 px-4 py-2">
        <Tooltip arrow title="Delete">
          <button
            className="m-1 w-12 rounded-lg bg-red-600 p-1 text-sm text-white shadow-md hover:bg-red-700"
            onClick={handleDeleteBook}
          >
            Delete
          </button>
        </Tooltip>
        <Tooltip arrow title="Edit">
          <button
            className="m-1 w-12 rounded-lg bg-cyan-500 p-1 text-sm text-white shadow-md hover:bg-cyan-700"
            onClick={handleEditBook}
          >
            Edit
          </button>
        </Tooltip>
      </td>
    </tr>
  );
};
export default TableRow;
