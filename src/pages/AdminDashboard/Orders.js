// Orders.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import OrdersTable from "../../shared/components/Admin/OrdersTable";
const Orders = () => {
  //   const [orders, setOrders] = useState([]);

  //   useEffect(() => {
  //     const fetchOrders = async () => {
  //       try {
  //         const response = await axios.get("http://localhost:8080/api/orders");
  //         setOrders(response.data);
  //       } catch (error) {
  //         console.error("Error fetching orders:", error);
  //       }
  //     };
  //     fetchOrders();
  //   }, []);

  return (
    <div className="Orders">
      <div className="overflow-x-auto">
        <OrdersTable />
      </div>
    </div>
  );
};

export default Orders;
