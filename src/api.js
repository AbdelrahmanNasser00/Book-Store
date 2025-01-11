import axios from "axios";

const apiToken = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.userDetails?.token || "";
  } catch (error) {
    console.error("Failed to parse user data:", error);
    return "";
  }
};

export const apiClient = axios.create({
  baseURL: "https://realtime-lecturing-server.onrender.com/api",
  timeout: 5000,
});

apiClient.interceptors.request.use((config) => {
  const token = apiToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("user");
      window.location.href = "/";
    }
    return Promise.reject(error);
  },
);

// API functions

// Books
export const fetchBooks = async () => {
  try {
    return await apiClient.get("/books");
  } catch (ex) {
    return { error: true, ex };
  }
};

export const fetchBookDetails = async (bookId) => {
  try {
    return await apiClient.get(`/books/${bookId}`);
  } catch (ex) {
    return { error: true, ex };
  }
};

export const addBook = async (data) => {
  try {
    return await apiClient.post("/books", data);
  } catch (ex) {
    return { error: true, ex };
  }
};

export const updateBook = async (bookId, updatedBookData) => {
  try {
    return await apiClient.put(`/books/${bookId}`, updatedBookData);
  } catch (ex) {
    return { error: true, ex };
  }
};

export const deleteBook = async (bookId) => {
  try {
    return await apiClient.delete(`/books/${bookId}`);
  } catch (ex) {
    return { error: true, ex };
  }
};

export const submitReview = async (bookId, reviewData) => {
  try {
    return await apiClient.post(`/books/${bookId}/reviews`, reviewData);
  } catch (ex) {
    return { error: true, ex };
  }
};

export const fetchReviews = async (bookId) => {
  try {
    return await apiClient.get(`/books/${bookId}/reviews`);
  } catch (ex) {
    return { error: true, ex };
  }
};

export const deleteReview = async (bookId) => {
  try {
    return await apiClient.delete(`/books/${bookId}/reviews`);
  } catch (ex) {
    return { error: true, ex };
  }
};

export const editReview = async (bookId, reviewData) => {
  try {
    return await apiClient.put(`/books/${bookId}/reviews`, reviewData);
  } catch (ex) {
    return { error: true, ex };
  }
};

// Cart
export const addToCart = async (book) => {
  try {
    return await apiClient.post(`/cart`, book);
  } catch (ex) {
    return { error: true, ex };
  }
};

export const fetchCart = async () => {
  try {
    return await apiClient.get(`/cart`);
  } catch (ex) {
    return { error: true, ex };
  }
};

export const removeCartItem = async (bookId) => {
  try {
    return await apiClient.request({
      method: "DELETE",
      url: `/cart`,
      data: { bookId },
    });
  } catch (ex) {
    return { error: true, ex };
  }
};

export const updateCartItem = async (bookId, updatedData) => {
  try {
    return await apiClient.put(`/cart`, { bookId, ...updatedData });
  } catch (ex) {
    return { error: true, ex };
  }
};

// Wishlist
export const fetchWishlist = async () => {
  try {
    return await apiClient.get(`/wishlist`);
  } catch (ex) {
    return { error: true, ex };
  }
};

export const addBookToWishlist = async (bookId) => {
  try {
    return await apiClient.post(`/wishlist`, { bookId });
  } catch (ex) {
    return { error: true, ex };
  }
};

// Orders
export const cashOnDeliveryPayment = async (order) => {
  try {
    return await apiClient.post(`/orders/cash-on-delivery`, order);
  } catch (ex) {
    return { error: true, ex };
  }
};

export const debitCreditPayment = async (order) => {
  try {
    return await apiClient.post(`/orders/credit-card`, order);
  } catch (ex) {
    return { error: true, ex };
  }
};

export const fetchOrders = async () => {
  try {
    return await apiClient.get(`/orders`);
  } catch (ex) {
    return { error: true, ex };
  }
};

export const updateOrderStatus = async (orderId, orderStatus) => {
  try {
    return await apiClient.put(`/orders/${orderId}`, orderStatus);
  } catch (ex) {
    return { error: true, ex };
  }
};

export const deleteOrder = async (orderId) => {
  try {
    return await apiClient.put(`/orders/${orderId}`);
  } catch (ex) {
    return { error: true, ex };
  }
};
