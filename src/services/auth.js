import { createApiEndpoint } from "./api";

const authApi = createApiEndpoint("/auth");

export const loginApi = async (credentials) => {
  try {
    const response = await authApi.post("/login", credentials);
    return response.data.userDetails;
  } catch (error) {
    throw error;
  }
};

export const registerApi = async (userData) => {
  try {
    const response = await authApi.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const setUserData = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

export const getUserData = () => {
  const userData = localStorage.getItem("user");
  return userData ? JSON.parse(userData) : null;
};

export const removeUserData = () => {
  localStorage.removeItem("user");
};
