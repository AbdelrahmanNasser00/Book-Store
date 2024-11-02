import axios from "axios";

export const apiClient = axios.create({
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

export const updateBook = async (bookId, updatedBookData) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.userDetails.token;
  console.log("updaaaateeeee", bookId, updatedBookData);
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

export const submitReview = async (bookId, reviewData) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.userDetails.token;
  console.log(reviewData);
  console.log(bookId);
  try {
    return await apiClient.post(`/books/${bookId}/reviews`, reviewData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (ex) {
    return { error: true, ex };
  }
};

export const fetchReviews = async (bookId) => {
  try {
    return await apiClient.get(`/books/${bookId}/reviews`);
  } catch (ex) {
    return {
      error: true,
      ex,
    };
  }
};

export const deleteReview = async (bookId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.userDetails.token;
  try {
    return await apiClient.delete(`/books/${bookId}/reviews`, {
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
export const editReview = async (bookId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.userDetails.token;
  try {
    return await apiClient.put(`/books/${bookId}/reviews`, {
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
