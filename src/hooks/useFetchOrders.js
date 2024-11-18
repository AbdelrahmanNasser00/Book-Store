import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchOrders } from "../api";

const UseFetchOrders = () => {
  const [orders, setOrders] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const getOrders = async () => {
      setLoading(true);
      try {
        const response = await fetchOrders();
        setOrders(response.data.orders.orders);
        setPagination(response.data.orders.pagination);
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

export default UseFetchOrders;
