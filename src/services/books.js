import { createApiEndpoint } from "./api";

const bookApi = createApiEndpoint("/books");

export const getBooksApi = () => bookApi.get();
export const getBookByIdApi = (bookId) => bookApi.get(`/${bookId}`);
export const createBookApi = (bookData) => bookApi.post("", bookData);
export const updateBookApi = (bookId, bookData) =>
  bookApi.put(`/${bookId}`, bookData);
export const deleteBookApi = (bookId) => bookApi.delete(`/${bookId}`);

export const getBookReviewsApi = (bookId) => bookApi.get(`/${bookId}/reviews`);
export const createBookReviewApi = (bookId, reviewData) =>
  bookApi.post(`/${bookId}/reviews`, reviewData);
export const updateBookReviewApi = (bookId, reviewData) =>
  bookApi.put(`/${bookId}/reviews`, reviewData);
export const deleteBookReviewApi = (bookId) =>
  bookApi.delete(`/${bookId}/reviews`);
