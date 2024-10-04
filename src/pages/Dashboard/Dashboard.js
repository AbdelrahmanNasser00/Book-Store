import React from "react";
import "../../shared/CSS/Dashboard.css";
import StoreManager from "./StoreManager";
import { StoreManagerContextProvider } from "../../context/StoreManagerContext";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <StoreManagerContextProvider>
        <StoreManager />
      </StoreManagerContextProvider>
    </div>
  );
};

export default Dashboard;
