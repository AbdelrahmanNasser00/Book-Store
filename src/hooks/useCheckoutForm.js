import { useContext, useMemo, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useOrders } from "./useOrders";
import { useCart } from "./useCart";

const useCheckoutForm = () => {
  const { cartItems } = useCart();
  const { currentUser } = useContext(AuthContext);
  const [paymentOption, setPaymentOption] = useState("cashOnDelivery");
  const navigate = useNavigate();
  const { createCashOrder, createCreditOrder } = useOrders();
  const [error, setError] = useState(null);

  const cart = useMemo(
    () =>
      cartItems.map((product) => ({
        bookId: product.bookId,
        quantity: product.quantity,
      })),
    [cartItems],
  );

  const [formData, setFormData] = useState({
    name: "",
    fullAddress: "",
    email: "",
    phoneNumber: "",
    governorate: "Cairo",
    notes: "",
    cart,
  });

  const handlePaymentChange = (value) => {
    setPaymentOption(value);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (currentUser === "guest") {
      return navigate("/login");
    }

    setError(null);
    let response;

    if (paymentOption === "cashOnDelivery") {
      try {
        response = await createCashOrder(formData);
        if (
          !response.error &&
          response.status >= 200 &&
          response.status < 300
        ) {
          navigate("/checkout-success");
        } else {
          throw new Error(response.ex);
        }
      } catch (error) {
        console.error("Error during cash on delivery payment:", error);
      }
    } else if (paymentOption === "debitCreditCard") {
      try {
        response = await createCreditOrder(formData);
        if (response.data.url) {
          window.location.href = response.data.url;
        } else {
          throw new Error(response.ex);
        }
      } catch (error) {
        console.error("Error during debit/credit payment:", error);
      }
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    paymentOption,
    handlePaymentChange,
    error,
  };
};

export default useCheckoutForm;
