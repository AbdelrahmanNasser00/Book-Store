import React from "react";
import OrdersTable from "../../components/Admin/OrdersTable";
const Orders = () => {
  return (
    <div className="Orders">
      <div className="overflow-x-auto">
        <OrdersTable />
      </div>
    </div>
  );
};

export default Orders;
