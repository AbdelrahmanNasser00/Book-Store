import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./BookSlice";
import CartSlice from "./CartSlice";

export const store = configureStore({
  reducer: {
    book: BookSlice,
    cart: CartSlice,
  },
});
export default store;
