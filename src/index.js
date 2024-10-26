import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { AuthContextProvider } from "./context/AuthContext";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { PersistGate } from "redux-persist/integration/react";
import { WishlistContextProvider } from "./context/WishlistContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthContextProvider>
          <WishlistContextProvider>
            <App />
          </WishlistContextProvider>
        </AuthContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
