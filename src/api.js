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
  // const data = {
  //   name: "Bioinformatics and Functional Genomics",
  //   category: "Bioinformatics",
  //   author: "Dr.Ahmed Hosny",
  //   numberOfPages: 500,
  //   description: "Bioinformatics and Functional Genomics",
  // };
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
