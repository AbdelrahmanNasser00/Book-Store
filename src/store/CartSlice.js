import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct(state, action) {
      const product = action.payload;
      const existingProduct = state.products.find(
        (item) => item._id === product._id
      );
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        state.products.push(product);
      }
      state.quantity += 1;
      state.total += product.price * product.quantity;
    },
    removeProduct(state, action) {
      const product = action.payload;
      const existingProduct = state.products.find(
        (item) => item._id === product._id
      );
      if (existingProduct) {
        state.products = state.products.filter(
          (item) => item._id !== product._id
        );
      }
      state.quantity -= product.quantity;
      state.total = state.total - product.price * product.quantity;
      if (state.quantity === 0) {
        state.total = 0;
      }
    },
    clearCart(state) {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    updateQuantity(state, action) {
      const product = action.payload;
      const existingProduct = state.products.find(
        (item) => item._id === product._id
      );
      if (existingProduct) {
        const quantityDifference = product.quantity - existingProduct.quantity;
        existingProduct.quantity = product.quantity;
        state.quantity += quantityDifference;
        state.total += existingProduct.price * quantityDifference;
      }
      if (state.quantity === 0) {
        state.total = 0;
      }
    },
  },
});

export const { addProduct, removeProduct, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
