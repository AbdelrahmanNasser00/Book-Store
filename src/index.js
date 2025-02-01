import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AuthContextProvider } from "./context/AuthContext";
import { WishlistContextProvider } from "./context/WishlistContext";
import { ToastProvider } from "./context/ToastContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastProvider>
        <AuthContextProvider>
          <WishlistContextProvider>
            <App />
          </WishlistContextProvider>
        </AuthContextProvider>
      </ToastProvider>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
