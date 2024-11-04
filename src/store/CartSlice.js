import { createSlice } from "@reduxjs/toolkit";

function saveCartToLocalStorage(state) {
  localStorage.setItem("guestCart", JSON.stringify(state));
}
let user = JSON.parse(localStorage.getItem("user"));

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    products: JSON.parse(localStorage.getItem("guestCart"))?.products || [],
    quantity: JSON.parse(localStorage.getItem("guestCart"))?.quantity || 0,
    total: JSON.parse(localStorage.getItem("guestCart"))?.total || 0,
  },
  reducers: {
    updateCart(state, action) {
      state.products = action.payload;
      console.log(action.payload);
      state.quantity = 0;
      state.total = 0;
      const books = state.products;
      console.log(books);
      books.forEach((book) => {
        state.quantity += book.quantity;
        state.total += book.price * book.quantity;
      });
    },
    addProduct(state, action) {
      const product = action.payload;
      const existingProduct = state.products.find(
        (item) => item.bookId === product.bookId,
      );
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        state.products.push(product);
      }
      state.quantity += 1;
      state.total += product.price * product.quantity;
      console.log(user);
      if (user && user === "guest") {
        saveCartToLocalStorage(state);
      }
    },
    removeProduct(state, action) {
      const product = action.payload;
      const existingProduct = state.products.find(
        (item) => item.bookId === product.bookId,
      );
      if (existingProduct) {
        state.products = state.products.filter(
          (item) => item.bookId !== product.bookId,
        );
      }
      state.quantity -= product.quantity;
      state.total = state.total - product.price * product.quantity;
      if (state.quantity === 0) {
        state.total = 0;
      }
      if (user && user === "guest") {
        saveCartToLocalStorage(state);
      }
    },
    clearCart(state) {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    updateQuantity: (state, action) => {
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
      } else {
        console.error("Product not found in the cart.");
      }
      if (user && user === "guest") {
        saveCartToLocalStorage(state);
      }
    },
  },
});

export const { updateCart, addProduct, removeProduct, updateQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
