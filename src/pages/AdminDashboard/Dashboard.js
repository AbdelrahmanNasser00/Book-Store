import React, { useState } from "react";
import "../../shared/CSS/Dashboard.css";
import StoreManager from "./StoreManager";
import { StoreManagerContextProvider } from "../../context/StoreManagerContext";
import Orders from "./Orders";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("storeManager");
  const tabClasses = (tabName) =>
    `px-4 py-2 rounded-t-lg text-lg font-semibold cursor-pointer 
      ${
        activeTab === tabName
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
      }`;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6 flex space-x-4 border-b border-gray-300">
        <button
          className={tabClasses("orders")}
          onClick={() => setActiveTab("orders")}
        >
          Orders
        </button>
        <button
          className={tabClasses("storeManager")}
          onClick={() => setActiveTab("storeManager")}
        >
          Store Manager
        </button>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-md">
        {activeTab === "orders" && <Orders />}
        {activeTab === "storeManager" && (
          <StoreManagerContextProvider>
            <StoreManager />
          </StoreManagerContextProvider>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
