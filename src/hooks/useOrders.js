import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrders,
  createCashOnDeliveryOrder,
  createCreditCardOrder,
  updateOrder,
  removeOrder,
  selectAllOrders,
  selectOrdersLoading,
  selectOrdersError,
} from "../store/OrdersSlice";

export const useOrders = () => {
  const dispatch = useDispatch();

  const orders = useSelector(selectAllOrders);
  const loading = useSelector(selectOrdersLoading);
  const error = useSelector(selectOrdersError);

  const getOrders = useCallback(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const createCashOrder = useCallback(
    (orderData) => {
      return dispatch(createCashOnDeliveryOrder(orderData)).unwrap();
    },
    [dispatch],
  );

  const createCreditOrder = useCallback(
    (orderData) => {
      return dispatch(createCreditCardOrder(orderData)).unwrap();
    },
    [dispatch],
  );

  const updateOrderStatus = useCallback(
    (orderId, statusData) => {
      dispatch(updateOrder({ orderId, statusData }));
    },
    [dispatch],
  );

  const deleteOrder = useCallback(
    (orderId) => {
      dispatch(removeOrder(orderId));
    },
    [dispatch],
  );

  return {
    orders,
    loading,
    error,
    getOrders,
    createCashOrder,
    createCreditOrder,
    updateOrderStatus,
    deleteOrder,
  };
};
