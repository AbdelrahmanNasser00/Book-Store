import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.token || "";
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://realtime-lecturing-server.onrender.com/api",
    prepareHeaders: (headers) => {
      const token = apiToken();
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchBooks: builder.query({
      query: (title) => ({
        url: `/books/search`,
        params: { title },
      }),
    }),
  }),
});

export const { useSearchBooksQuery } = apiSlice;
