import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCartApi,
  addToCartApi,
  updateCartItemApi,
  removeFromCartApi,
  clearCartApi,
} from "../services/cart";

// Helper function to save cart to localStorage
const saveCartToLocalStorage = (state) => {
  localStorage.setItem("guestCart", JSON.stringify(state));
};

// Load initial state from localStorage for guest users
const loadInitialState = () => {
  const savedCart = JSON.parse(localStorage.getItem("guestCart"));
  return {
    products: savedCart?.products || [],
    quantity: savedCart?.quantity || 0,
    total: savedCart?.total || 0,
    loading: false,
    error: null,
  };
};

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCartApi();
      return response.data.cart;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch cart");
    }
  },
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (cartData, { rejectWithValue }) => {
    try {
      await addToCartApi(cartData);
      const response = await getCartApi();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add to cart");
    }
  },
);

export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async ({ bookId, quantity }, { rejectWithValue }) => {
    try {
      await updateCartItemApi(bookId, quantity);
      // return bookId and quantity that changed in client till backend send object with them
      // return response.data;
      return { bookId, quantity };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to update cart item",
      );
    }
  },
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (bookId, { rejectWithValue }) => {
    try {
      await removeFromCartApi(bookId);
      return bookId;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to remove from cart",
      );
    }
  },
);

export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, { rejectWithValue }) => {
    try {
      await clearCartApi();
      return null;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to clear cart");
    }
  },
);

const calculateCartTotals = (products) => {
  return products.reduce(
    (totals, item) => ({
      quantity: totals.quantity + item.quantity,
      total: totals.total + item.price * item.quantity,
    }),
    { quantity: 0, total: 0 },
  );
};

export const CartSlice = createSlice({
  name: "cart",
  initialState: loadInitialState(),
  reducers: {
    addGuestProduct: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (item) => item.bookId === product.bookId,
      );

      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        state.products.push(product);
      }

      state.quantity += product.quantity;
      state.total += product.price * product.quantity;

      const user = JSON.parse(localStorage.getItem("user"));
      if (user === "guest") {
        saveCartToLocalStorage(state);
      }
    },

    removeGuestProduct: (state, action) => {
      const product = action.payload;
      state.products = state.products.filter(
        (item) => item.bookId !== product.bookId,
      );
      state.quantity -= product.quantity;
      state.total -= product.price * product.quantity;

      if (state.quantity === 0) {
        state.total = 0;
      }

      const user = JSON.parse(localStorage.getItem("user"));
      if (user === "guest") {
        saveCartToLocalStorage(state);
      }
    },
    updateGuestQuantity: (state, action) => {
      const { bookId, quantity } = action.payload;
      const product = state.products.find((item) => item.bookId === bookId);

      if (product) {
        product.quantity = quantity;
        state.quantity = state.products.reduce(
          (total, item) => total + item.quantity,
          0,
        );
        state.total = state.products.reduce(
          (total, item) => total + item.quantity * item.price,
          0,
        );

        const user = JSON.parse(localStorage.getItem("user"));
        if (user === "guest") {
          saveCartToLocalStorage(state);
        }
      }
    },
    clearGuestCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;

      const user = JSON.parse(localStorage.getItem("user"));
      if (user === "guest") {
        saveCartToLocalStorage(state);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch cart
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.products = action.payload;
        const { quantity, total } = calculateCartTotals(action.payload);
        state.quantity = quantity;
        state.total = total;
        state.loading = false;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add to cart
      .addCase(addToCart.fulfilled, (state, action) => {
        // const product = action.payload;
        // const existingProduct = state.products.find(
        //   (item) => item.bookId === product.bookId,
        // );

        // if (existingProduct) {
        //   existingProduct.quantity += product.quantity;
        // } else {
        //   state.products.push(product);
        // }

        // const { quantity, total } = calculateCartTotals(state.products);
        // state.quantity = quantity;
        // state.total = total;
        state.products = action.payload.cart;
        state.quantity = state.products.reduce(
          (total, item) => total + item.quantity,
          0,
        );
        state.total = state.products.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        );
        state.loading = false;
      })
      // Update cart item
      .addCase(updateCartItem.fulfilled, (state, action) => {
        const { bookId, quantity } = action.payload;
        const product = state.products.find((item) => item.bookId === bookId);
        if (product) {
          product.quantity = quantity;
          const totals = calculateCartTotals(state.products);
          state.quantity = totals.quantity;
          state.total = totals.total;
        }
      })
      // Remove cart item
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (item) => item.bookId !== action.payload,
        );
        const { quantity, total } = calculateCartTotals(state.products);
        state.quantity = quantity;
        state.total = total;
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.products = [];
        state.quantity = 0;
        state.total = 0;
      });
  },
});

export const selectCartItems = (state) => state.cart.products;
export const selectCartQuantity = (state) => state.cart.quantity;
export const selectCartTotal = (state) => state.cart.total;
export const selectCartLoading = (state) => state.cart.loading;
export const selectCartError = (state) => state.cart.error;

export const {
  addGuestProduct,
  removeGuestProduct,
  updateGuestQuantity,
  clearGuestCart,
} = CartSlice.actions;
export default CartSlice.reducer;
