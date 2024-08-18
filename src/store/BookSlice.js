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
      console.log(action.payload);
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { loadBooks, appendBook, deleteBook } = BookSlice.actions;
export default BookSlice.reducer;
