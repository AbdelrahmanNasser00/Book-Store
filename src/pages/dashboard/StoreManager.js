import React, { useState } from "react";
import ManagerBooksTable from "../../shared/components/ManagerBooksTable";
import Search from "../../shared/components/Search";
import AddBookForm from "../../shared/components/AddBookForms";

const StoreManager = () => {
  const [addBook, setAddBook] = useState(false);
  const [addBookGoogleAPI, setAddBookGoogleAPI] = useState(false);
  const [addToCatalog, setAddToCatalog] = useState(null);
  return (
    <div className="StoreManager">
      <button
        onClick={() => {
          setAddBook(!addBook);
          setAddBookGoogleAPI(false);
          setAddToCatalog(null);
        }}>
        Add Book
      </button>
      <button
        onClick={() => {
          setAddBook(false);
          setAddBookGoogleAPI(!addBookGoogleAPI);
        }}>
        Add Book (Google Books API)
      </button>
      {addBookGoogleAPI && (
        <Search
          setAddToCatalog={setAddToCatalog}
          setAddBookGoogleAPI={setAddBookGoogleAPI}
          addToCatalog={null}
        />
      )}
      {addBook && <AddBookForm />}
      {addToCatalog !== null && !addBookGoogleAPI && (
        <AddBookForm
          addToCatalog={addToCatalog}
          setAddToCatalog={setAddToCatalog}
        />
      )}
      <ManagerBooksTable />
    </div>
  );
};

export default StoreManager;
