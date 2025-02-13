import { createApiEndpoint } from "./api";

const wishlistApi = createApiEndpoint("/wishlist");

export const getWishlistApi = () => wishlistApi.get();
export const addToWishlistApi = (bookId) => wishlistApi.post("", { bookId });
export const removeFromWishlistApi = (bookId) =>
  wishlistApi.delete("", { bookId });
