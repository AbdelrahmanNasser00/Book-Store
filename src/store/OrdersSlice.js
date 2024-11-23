import { createSlice } from "@reduxjs/toolkit";
export const OrdersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    pagination: null,
  },
  reducers: {
    loadOrders: (state, action) => {
      state.orders = action.payload.orders;
      state.pagination = action.payload.pagination;
    },
    updateOrder: (state, action) => {
      const index = state.orders.findIndex(
        (order) => order._id === action.payload._id,
      );
      if (index >= 0) {
        state.orders[index] = action.payload;
      }
    },
  },
});
export const { loadOrders, updateOrder } = OrdersSlice.actions;
export default OrdersSlice.reducer;
