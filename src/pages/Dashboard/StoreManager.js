import React, { useContext, useEffect, useState } from "react";
import ManagerBooksTable from "../../shared/components/ManagerBooksTable";
import Search from "../../shared/components/Search";
import AddBookForm from "../../shared/components/AddBookForms";
import { MDBBtn } from "mdb-react-ui-kit";
import { StoreManagerContext } from "../../context/StoreManagerContext";
import { addBook, fetchBooks } from "../../api";

const StoreManager = () => {
  const {
    isAddBookVisible,
    isSearchVisible,
    bookToCatalog,
    toggleAddBookVisibility,
    toggleSearchVisibility,
  } = useContext(StoreManagerContext);

  // const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   const getBooks = async () => {
  //     const response = await fetchBooks();
  //     if (response.error) {
  //       console.log(response.ex);
  //     } else {
  //       setBooks(response.data.books);
  //     }
  //   };
  //   getBooks();
  // }, []);

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
