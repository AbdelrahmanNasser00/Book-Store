import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../api";
import { loadOrders } from "../store/OrdersSlice";

const useFetchOrders = () => {
  const orders = useSelector((state) => state.orders.orders);
  const pagination = useSelector((state) => state.orders.pagination);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const getOrders = async () => {
      setLoading(true);
      try {
        const response = await fetchOrders();
        dispatch(loadOrders(response.data.orders));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getOrders();
  }, [dispatch]);
  return { orders, pagination, loading, error };
};

export default useFetchOrders;
