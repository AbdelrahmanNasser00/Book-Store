import { createApiEndpoint } from "./api";

const orderApi = createApiEndpoint("/orders");

export const getOrdersApi = () => orderApi.get();
export const createCashOnDeliveryOrderApi = (orderData) =>
  orderApi.post("/cash-on-delivery", orderData);
export const createCreditCardOrderApi = (orderData) =>
  orderApi.post("/credit-card", orderData);
export const updateOrderStatusApi = (orderId, statusData) =>
  orderApi.put(`/${orderId}`, statusData);
export const deleteOrderApi = (orderId) => orderApi.delete(`/${orderId}`);
