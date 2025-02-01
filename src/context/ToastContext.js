import toast, { Toaster } from "react-hot-toast";
import React, { createContext, useContext } from "react";
const ToastContext = createContext();
const ToastProvider = ({ children }) => {
  const showToast = (message, type = "success") => {
    if (type === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toaster />
    </ToastContext.Provider>
  );
};
export { ToastProvider, ToastContext };
export const useToast = () => useContext(ToastContext);
