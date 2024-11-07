import { useContext, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { cashOnDeliveryPayment, debitCreditPayment } from "../api";

const useCheckoutForm = () => {
  const { products } = useSelector((state) => state.cart);
  const { currentUser } = useContext(AuthContext);
  const [paymentOption, setPaymentOption] = useState("cashOnDelivery");
  const navigate = useNavigate();

  const cart = useMemo(
    () =>
      products.map((product) => ({
        bookId: product.bookId,
        quantity: product.quantity,
      })),
    [products],
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
    let response;

    if (paymentOption === "cashOnDelivery") {
      try {
        response = await cashOnDeliveryPayment(formData);
        if (response.err) {
          throw new Error("Error in completing order");
        } else {
          navigate("/checkout-success");
        }
      } catch (error) {
        console.error("Error during cash on delivery payment:", error);
      }
    } else if (paymentOption === "debitCreditCard") {
      try {
        response = await debitCreditPayment(formData);
        if (response.data.url) {
          window.location.href = response.data.url;
        } else {
          throw new Error("Failed to redirect to payment gateway.");
        }
      } catch (error) {
        console.error("Error during debit/credit payment:", error);
      }
    }

    console.log("Form data submitted:", formData);
  };
  return {
    formData,
    handleInputChange,
    handleSubmit,
    paymentOption,
    handlePaymentChange,
  };
};

export default useCheckoutForm;
