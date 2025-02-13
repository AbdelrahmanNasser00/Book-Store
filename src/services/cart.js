import { createApiEndpoint } from "./api";

const cartApi = createApiEndpoint("/cart");

export const getCartApi = () => cartApi.get();
export const addToCartApi = (cartData) => cartApi.post("", cartData);
export const updateCartItemApi = (bookId, quantity) =>
  cartApi.put("", { bookId, quantity });
export const removeFromCartApi = (bookId) => cartApi.delete("", { bookId });
export const clearCartApi = () => cartApi.delete("");
