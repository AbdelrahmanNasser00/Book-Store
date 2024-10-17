import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 5000,
});

export const fetchBooks = async (data) => {
  try {
    return await apiClient.get("/books", data);
  } catch (ex) {
    return {
      error: true,
      ex,
    };
  }
};

export const addBook = async (data) => {
  console.log(data);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.userDetails.token;
  try {
    return await apiClient.post("/books", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (ex) {
    return {
      error: true,
      ex,
    };
  }
};

export const editBook = async (bookId, updatedBookData) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.userDetails.token;
  try {
    return await apiClient.put(`/books/${bookId}`, updatedBookData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (ex) {
    return {
      error: true,
      ex,
    };
  }
};

export const deleteBook = async (bookId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.userDetails.token;
  try {
    return await apiClient.delete(`/books/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (ex) {
    return {
      error: true,
      ex,
    };
  }
};

export const submitReview = async (id, reviewData) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.userDetails.token;
  console.log(reviewData);
  console.log(id);
  try {
    return await apiClient.post(`/books/${id}/reviews`, reviewData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (ex) {
    return { error: true, ex };
  }
};

export const fetchReviews = async (id) => {
  try {
    return await apiClient.get(`/books/${id}/reviews`);
  } catch (ex) {
    return {
      error: true,
      ex,
    };
  }
};
