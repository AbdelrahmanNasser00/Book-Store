import axios from "axios";

const apiToken = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.token || "";
  } catch (error) {
    console.error("Failed to parse user data:", error);
    return "";
  }
};

export const apiClient = axios.create({
  baseURL:
    "https://realtime-lecturing-server.onrender.com/api" ||
    "http://localhost:8080/api",
  timeout: 10000,
  retryTimes: 3,
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
    if (error.response?.status === 401 && !error.config.isAuthRequest) {
      localStorage.removeItem("user");
      window.location.href = "/";
    }
    return Promise.reject(error);
  },
);

export const createApiEndpoint = (endpoint) => ({
  get: (url = "") => apiClient.get(`${endpoint}${url}`),
  post: (url = "", data) => apiClient.post(`${endpoint}${url}`, data),
  put: (url = "", data) => apiClient.put(`${endpoint}${url}`, data),
  delete: (url = "", data) => apiClient.delete(`${endpoint}${url}`, { data }),
});
