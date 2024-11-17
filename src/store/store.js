import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./BookSlice";
import CartSlice from "./CartSlice";
import { apiSlice } from "./ApiSlice";

export const store = configureStore({
  reducer: {
    book: BookSlice,
    cart: CartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;
