import { useState, useCallback, useContext } from "react";
import { useToast } from "../context/ToastContext";

import { AuthContext } from "../context/AuthContext";
import {
  addToWishlistApi,
  getWishlistApi,
  removeFromWishlistApi,
} from "../services/wishlist";

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { showToast } = useToast();

  const getWishlist = useCallback(async () => {
    if (currentUser === "guest") return;

    setLoading(true);
    try {
      const response = await getWishlistApi();
      setWishlist(response.data.wishlist);
      setError(null);
    } catch (err) {
      setError(err.response?.data || "Failed to fetch wishlist");
      console.log(err);
      showToast("Failed to fetch wishlist", "error");
    } finally {
      setLoading(false);
    }
  }, [currentUser, showToast]);

  // useEffect(() => {
  //   if (currentUser !== "guest") {
  //     getWishlist();
  //   }
  // }, [currentUser, getWishlist]);

  const addToWishlist = useCallback(
    async (bookId) => {
      if (currentUser === "guest") {
        showToast("Please login to add to wishlist", "info");
        return;
      }

      setLoading(true);
      try {
        await addToWishlistApi(bookId);
        await getWishlist();
        showToast("Added to wishlist");
      } catch (err) {
        setError(err.response?.data || "Failed to add to wishlist");
        showToast("Failed to add to wishlist", "error");
      } finally {
        setLoading(false);
      }
    },
    [currentUser, getWishlist, showToast],
  );

  const removeFromWishlist = useCallback(
    async (bookId) => {
      if (currentUser === "guest") return;

      setLoading(true);
      try {
        await removeFromWishlistApi(bookId);
        await getWishlist();
        showToast("Removed from wishlist");
      } catch (err) {
        setError(err.response?.data || "Failed to remove from wishlist");
        showToast("Failed to remove from wishlist", "error");
      } finally {
        setLoading(false);
      }
    },
    [currentUser, getWishlist, showToast],
  );

  const isInWishlist = useCallback(
    (bookId) => {
      return wishlist.some((item) => item.bookId === bookId);
    },
    [wishlist],
  );

  return {
    wishlist,
    loading,
    error,
    getWishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };
};
