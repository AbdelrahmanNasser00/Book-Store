import React, { useContext } from "react";
import ManagerBooksTable from "../../shared/components/ManagerBooksTable";
import Search from "../../shared/components/Search";
import AddBookForm from "../../shared/components/AddBookForms";
import { MDBBtn } from "mdb-react-ui-kit";
import { StoreManagerContext } from "../../context/StoreManagerContext";

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
