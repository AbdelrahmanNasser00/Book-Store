import { useContext, useMemo, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useOrders } from "./useOrders";
import { useCart } from "./useCart";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "../utils/Schemas/checkoutSchema";

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

  const {
    register,
    formState: { errors, isValid },
    setValue,
    watch,
    trigger,
  } = useForm({
    resolver: yupResolver(checkoutSchema),
    defaultValues: {
      name: "",
      fullAddress: "",
      email: "",
      phoneNumber: "",
      governorate: "Cairo",
      notes: "",
    },
    mode: "onChange",
  });

  const formData = watch();

  const handlePaymentChange = (value) => {
    setPaymentOption(value);
  };

  const handleInputChange = (field, value) => {
    setValue(field, value);
  };

  const handleFormSubmit = async () => {
    const isFormValid = await trigger();
    if (!isFormValid) {
      return;
    }

    if (currentUser === "guest") {
      return navigate("/login");
    }

    setError(null);
    let response;

    const orderData = {
      ...formData,
      cart,
    };

    if (paymentOption === "cashOnDelivery") {
      try {
        response = await createCashOrder(orderData);
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
        setError(error.message);
      }
    } else if (paymentOption === "debitCreditCard") {
      try {
        response = await createCreditOrder(orderData);
        if (response.data.url) {
          window.location.href = response.data.url;
        } else {
          throw new Error(response.ex);
        }
      } catch (error) {
        console.error("Error during debit/credit payment:", error);
        setError(error.message);
      }
    }
  };

  return {
    formData,
    handleInputChange,
    handleFormSubmit,
    paymentOption,
    handlePaymentChange,
    error,
    register,
    errors,
    isValid,
  };
};

export default useCheckoutForm;
