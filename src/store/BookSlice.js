import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBooksApi,
  getBookByIdApi,
  createBookApi,
  updateBookApi,
  deleteBookApi,
  getBookReviewsApi,
  createBookReviewApi,
  updateBookReviewApi,
  deleteBookReviewApi,
} from "../services/books";

export const fetchBooks = createAsyncThunk(
  "book/fetchBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getBooksApi();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch books");
    }
  },
);
export const fetchBookById = createAsyncThunk(
  "book/fetchBookById",
  async (bookId, { rejectWithValue }) => {
    try {
      const response = await getBookByIdApi(bookId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch book");
    }
  },
);

export const createBook = createAsyncThunk(
  "book/createBook",
  async (bookData, { rejectWithValue }) => {
    try {
      const response = await createBookApi(bookData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to create book");
    }
  },
);

export const updateBook = createAsyncThunk(
  "book/updateBook",
  async ({ bookId, bookData }, { rejectWithValue }) => {
    try {
      const response = await updateBookApi(bookId, bookData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to update book");
    }
  },
);

export const removeBook = createAsyncThunk(
  "book/removeBook",
  async (bookId, { rejectWithValue }) => {
    try {
      await deleteBookApi(bookId);
      return bookId;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete book");
    }
  },
);

export const fetchBookReviews = createAsyncThunk(
  "book/fetchReviews",
  async (bookId, { rejectWithValue }) => {
    try {
      const response = await getBookReviewsApi(bookId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch reviews");
    }
  },
);

export const createBookReview = createAsyncThunk(
  "book/createReviews",
  async ({ bookId, reviewData }, { rejectWithValue }) => {
    try {
      const response = await createBookReviewApi(bookId, reviewData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to create review");
    }
  },
);

export const updateBookReview = createAsyncThunk(
  "book/updateReview",
  async ({ bookId, reviewData }, { rejectWithValue }) => {
    try {
      const response = await updateBookReviewApi(bookId, reviewData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to update review");
    }
  },
);

export const deleteBookReview = createAsyncThunk(
  "book/deleteReview",
  async ({ bookId, reviewId }, { rejectWithValue }) => {
    try {
      await deleteBookReviewApi(bookId);
      return reviewId;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete review");
    }
  },
);

export const BookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    selectedBook: null,
    loading: false,
    error: null,
    reviews: [],
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSelectedBook: (state) => {
      state.selectedBook = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all books
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload.books;
        state.lastUpdated = new Date().toISOString();
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch single book
      .addCase(fetchBookById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedBook = action.payload.book;
        // const index = state.books.findIndex(
        //   (b) => b.bookId === action.payload.bookId,
        // );
        // if (index !== -1) {
        //   state.books[index] = action.payload;
        // }
      })
      .addCase(fetchBookById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create book
      .addCase(createBook.fulfilled, (state, action) => {
        state.books.push(action.payload.book);
        state.loading = false;
      })

      // Update book
      .addCase(updateBook.fulfilled, (state, action) => {
        const index = state.books.findIndex(
          (b) => b.bookId === action.payload.book._id,
        );
        if (index !== -1) {
          state.books[index] = action.payload.book;
        }
        if (state.selectedBook?.book.bookId === action.payload.book._id) {
          state.selectedBook = action.payload.book;
        }
        state.loading = false;
      })

      // Delete book
      // TODO:need to reconfig with admin function
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter(
          (book) => book.bookId !== action.payload,
        );
        state.loading = false;
      })

      // Fetch reviews
      .addCase(fetchBookReviews.fulfilled, (state, action) => {
        state.reviews = action.payload.reviews;
      })

      // Create review
      .addCase(createBookReview.fulfilled, (state, action) => {
        window.location.reload();
        // There is a problem in object that return from api doesn't have first and last name
        // state.reviews.push(action.payload.review);
      })

      // Update review
      .addCase(updateBookReview.fulfilled, (state, action) => {
        const index = state.reviews.findIndex(
          (review) => review._id === action.payload.review._id,
        );
        if (index !== -1) {
          state.reviews[index].comment = action.payload.review.comment;
          state.reviews[index].rating = action.payload.review.rating;
        }
      })

      // Delete review
      .addCase(deleteBookReview.fulfilled, (state, action) => {
        state.reviews = state.reviews.filter(
          (review) => review._id !== action.payload,
        );
      });
  },
});

export const selectAllBooks = (state) => state.book.books;
export const selectBookById = (state, bookId) =>
  state.book.books.find((book) => book.bookId === bookId);
export const selectSelectedBook = (state) => state.book.selectedBook;
export const selectBookReviews = (state) => state.book.reviews;
export const selectBooksLoading = (state) => state.book.loading;
export const selectBooksError = (state) => state.book.error;

export const { clearError, clearSelectedBook } = BookSlice.actions;
export default BookSlice.reducer;
