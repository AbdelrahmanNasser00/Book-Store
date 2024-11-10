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
      <MDBBtn onClick={toggleAddBookVisibility} style={{ margin: "10px" }}>
        Add Book
      </MDBBtn>
      <MDBBtn onClick={toggleSearchVisibility} style={{ margin: "10px" }}>
        Add Book (Google Books API)
      </MDBBtn>

      {isSearchVisible && <Search />}

      {(isAddBookVisible || bookToCatalog !== null) && <AddBookForm />}
      <ManagerBooksTable />
    </div>
  );
};

export default StoreManager;
