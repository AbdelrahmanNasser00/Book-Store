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
export const fetchBookDetails = async (bookId) => {
  try {
    return await apiClient.get(`/books/${bookId}`);
  } catch (ex) {
    return {
      error: true,
      ex,
    };
  }
};

export const addBook = async (data) => {
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

export const addToCart = async (book, currentUser) => {
  const token = currentUser?.userDetails?.token;
  if (!token) throw new Error("User token not found");
  try {
    return await apiClient.post(`/cart`, book, {
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
export const fetchCart = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.userDetails.token;
  try {
    return await apiClient.get(`/cart`, {
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
export const removeCartItem = async (bookId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.userDetails.token;
  try {
    return await apiClient.request({
      method: "DELETE",
      url: `/cart`,
      data: { bookId },
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
export const updateCartItem = async (bookId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.userDetails.token;
  try {
    return await apiClient.put(`/cart`, bookId, {
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
export const fetchWishlist = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.userDetails.token;
  try {
    return await apiClient.get(`/wishlist`, {
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
export const addBookToWishlist = async (bookId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.userDetails.token;
  try {
    return await apiClient.post(`/wishlist`, bookId, {
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
