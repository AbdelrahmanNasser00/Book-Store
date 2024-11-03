import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    updateCart(state, action) {
      state.products = action.payload;
      state.quantity = 0;
      state.total = 0;
      const books = state.products;
      books.forEach((book) => {
        state.quantity += book.quantity;
        state.total += book.book.price * book.quantity;
      });
    },
    addProduct(state, action) {
      const product = action.payload;
      const existingProduct = state.products.find(
        (item) => item._id === product._id,
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
      console.log(product);
      const existingProduct = state.products.find(
        (item) => item._id === product._id,
      );
      if (existingProduct) {
        state.products = state.products.filter(
          (item) => item._id !== product._id,
        );
      }
      state.quantity -= product.quantity;
      state.total = state.total - product.book.price * product.quantity;
      console.log("After", state.total);

      if (state.quantity === 0) {
        state.total = 0;
      }
    },
    clearCart(state) {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    updateQuantity: (state, action) => {
      const { bookId, quantity } = action.payload;
      const product = state.products.find((item) => item.book._id === bookId);
      if (product) {
        product.quantity = quantity;
        state.quantity = state.products.reduce(
          (total, item) => total + item.quantity,
          0,
        );
        state.total = state.products.reduce(
          (total, item) => total + item.quantity * item.book.price,
          0,
        );
      } else {
        console.error("Product not found in the cart.");
      }
    },
  },
});

export const { updateCart, addProduct, removeProduct, updateQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
