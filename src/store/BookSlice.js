import { createSlice } from "@reduxjs/toolkit";

export const BookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
  },
  reducers: {
    loadBooks: (state, action) => {
      state.books = action.payload;
    },
    appendBook: (state, action) => {
      const newOrUpdatedBook = action.payload;
      const existingBookIndex = state.books.findIndex(
        (book) => book.bookId === newOrUpdatedBook.bookId
      );
      if (existingBookIndex !== -1) {
        state.books[existingBookIndex] = newOrUpdatedBook;
      } else {
        state.books.push(newOrUpdatedBook);
        console.log(state.books);
      }
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.bookId !== action.payload
      );
    },
  },
});

export const { loadBooks, appendBook, deleteBook } = BookSlice.actions;
export default BookSlice.reducer;
