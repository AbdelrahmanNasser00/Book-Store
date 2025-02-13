import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBooks,
  fetchBookById,
  createBook,
  updateBook,
  removeBook,
  fetchBookReviews,
  createBookReview,
  updateBookReview,
  deleteBookReview,
  selectBookReviews,
  selectAllBooks,
  selectSelectedBook,
  selectBooksLoading,
  selectBooksError,
  clearSelectedBook,
} from "../store/BookSlice";

export const useBooks = () => {
  const dispatch = useDispatch();

  const books = useSelector(selectAllBooks);
  const selectedBook = useSelector(selectSelectedBook);
  const bookReviews = useSelector(selectBookReviews);
  const loading = useSelector(selectBooksLoading);
  const error = useSelector(selectBooksError);

  const getBooks = useCallback(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const getBookById = useCallback(
    (bookId) => {
      dispatch(fetchBookById(bookId));
    },
    [dispatch],
  );

  const addBook = useCallback(
    (bookData) => {
      dispatch(createBook(bookData));
    },
    [dispatch],
  );

  const editBook = useCallback(
    (bookId, bookData) => {
      dispatch(updateBook({ bookId, bookData }));
    },
    [dispatch],
  );

  const deleteBook = useCallback(
    (bookId) => {
      dispatch(removeBook(bookId));
    },
    [dispatch],
  );

  const fetchReviews = useCallback(
    (bookId) => {
      dispatch(fetchBookReviews(bookId));
    },
    [dispatch],
  );

  const createReview = useCallback(
    (bookId, reviewData) => {
      dispatch(createBookReview({ bookId, reviewData }));
    },
    [dispatch],
  );

  const updateReview = useCallback(
    (bookId, reviewData) => {
      dispatch(updateBookReview({ bookId, reviewData }));
    },
    [dispatch],
  );

  const deleteReview = useCallback(
    (bookId, reviewId) => {
      dispatch(deleteBookReview({ bookId, reviewId }));
    },
    [dispatch],
  );

  const clearBook = useCallback(() => {
    dispatch(clearSelectedBook());
  }, [dispatch]);

  return {
    books,
    bookReviews,
    selectedBook,
    loading,
    error,

    // user functions
    getBooks,
    getBookById,
    fetchReviews,
    createReview,
    updateReview,
    deleteReview,
    clearBook,
    // admin functions
    addBook,
    editBook,
    deleteBook,
  };
};
