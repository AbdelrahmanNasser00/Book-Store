import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getOrdersApi,
  createCashOnDeliveryOrderApi,
  createCreditCardOrderApi,
  updateOrderStatusApi,
  deleteOrderApi,
} from "../services/orders";

export const fetchOrders = createAsyncThunk(
  "order/fetchOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getOrdersApi();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch orders");
    }
  },
);

export const createCashOnDeliveryOrder = createAsyncThunk(
  "order/createCashOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await createCashOnDeliveryOrderApi(orderData);
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create order",
      );
    }
  },
);

export const createCreditCardOrder = createAsyncThunk(
  "order/createCreditOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await createCreditCardOrderApi(orderData);
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to create order");
    }
  },
);

export const updateOrder = createAsyncThunk(
  "order/updateOrder",
  async ({ orderId, statusData }, { rejectWithValue }) => {
    try {
      await updateOrderStatusApi(orderId, statusData);
      return { orderId, statusData };
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to update order");
    }
  },
);

export const removeOrder = createAsyncThunk(
  "order/removeOrder",
  async (orderId, { rejectWithValue }) => {
    try {
      await deleteOrderApi(orderId);
      return orderId;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete order");
    }
  },
);

export const OrderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    loading: false,
    error: null,
    lastUpdated: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch orders
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.orders.orders;
        state.lastUpdated = new Date().toISOString();
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update order
      .addCase(updateOrder.fulfilled, (state, action) => {
        const index = state.orders.findIndex(
          (order) => order._id === action.payload.orderId,
        );
        if (index !== -1) {
          state.orders[index].orderStatus =
            action.payload.statusData.orderStatus;
          state.orders[index].paymentStatus =
            action.payload.statusData.paymentStatus;
        }
        state.loading = false;
      })

      // Delete order
      .addCase(removeOrder.fulfilled, (state, action) => {
        state.orders = state.orders.filter(
          (order) => order._id !== action.payload,
        );
        state.loading = false;
      });
  },
});

export const selectAllOrders = (state) => state.orders.orders;
export const selectOrdersLoading = (state) => state.orders.loading;
export const selectOrdersError = (state) => state.orders.error;

export const { clearError } = OrderSlice.actions;
export default OrderSlice.reducer;
