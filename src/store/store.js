import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./BookSlice";
import CartSlice from "./CartSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedBookReducer = persistReducer(persistConfig, BookReducer);
// const persistedCartReducer = persistReducer(persistConfig, CartSlice);

export const store = configureStore({
  reducer: {
    book: persistedBookReducer,
    cart: CartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
