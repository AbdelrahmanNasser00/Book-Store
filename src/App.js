import React, { useContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/AdminDashboard/Dashboard";
import { AuthContext } from "./context/AuthContext";
import ProductPage from "./pages/Books/ProductPage";
import CategoryPage from "./pages/Books/CategoryPage";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Favorites/Wishlist";
import Checkout from "./pages/Checkout/Checkout";
import CheckoutSuccess from "./pages/Checkout/CheckoutSuccess";
import Spinner from "./components/UI/Spinner";
import { ScrollRestorationProvider } from "./context/ScrollRestoration";

function App() {
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const AdminRoute = ({ children }) => {
    if (
      currentUser &&
      currentUser !== "guest" &&
      currentUser?.userDetails?.role === "admin"
    ) {
      return children;
    } else {
      return <Navigate to="/" replace={true} />;
    }
  };

  const AuthRoute = ({ children }) => {
    if (currentUser !== "guest") {
      return <Navigate to="/" replace={true} />;
    }
    return children;
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Router>
      <ScrollRestorationProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route
            path="/login"
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            path="/register"
            element={<AuthRoute>{<Register />}</AuthRoute>}
          />
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </ScrollRestorationProvider>
    </Router>
  );
}

export default App;
