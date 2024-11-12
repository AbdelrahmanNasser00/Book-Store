import React, { useContext } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { StoreManagerContext } from "../../context/StoreManagerContext";
import ManagerBooksTable from "../../shared/components/Admin/ManagerBooksTable";
import Search from "../../shared/components/Admin/Search";
import AddBookForm from "../../shared/components/Admin/AddBookForms";

const StoreManager = () => {
  const {
    isAddBookVisible,
    isSearchVisible,
    bookToCatalog,
    toggleAddBookVisibility,
    toggleSearchVisibility,
  } = useContext(StoreManagerContext);

  return (
    <div className="StoreManager">
      <button
        className="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-xl"
        onClick={toggleAddBookVisibility}
        style={{ margin: "10px" }}
      >
        Add Book
      </button>
      <button
        className="rounded-lg bg-green-500 px-4 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl"
        onClick={toggleSearchVisibility}
        style={{ margin: "10px" }}
      >
        Add Book (Google Books API)
      </button>

      {isSearchVisible && <Search />}

      {(isAddBookVisible || bookToCatalog !== null) && <AddBookForm />}
      <ManagerBooksTable />
    </div>
  );
};

export default StoreManager;
