import { useContext, useState } from "react";
import { StoreManagerContext } from "../../context/StoreManagerContext";
import { Tooltip } from "@mui/material";
import ConfirmationModal from "../ConfirmationModal";
import { useBooks } from "../../hooks/useBooks";
const TableRow = ({ book }) => {
  const { deleteBook } = useBooks();
  const { setEditBookForm } = useContext(StoreManagerContext);
  const [isModalOpen, setModalOpen] = useState(false);
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
    <>
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
              onClick={() => setModalOpen(true)}
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
      <ConfirmationModal
        isOpen={isModalOpen}
        message="Are you sure you want to delete this book?"
        onConfirm={handleDeleteBook}
        onCancel={() => setModalOpen(false)}
      />
    </>
  );
};
export default TableRow;
