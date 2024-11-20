import React from "react";
import PlaceOrderButton from "./PlaceOrderButton";
import useFetchCart from "../../hooks/useFetchCart";
import OrderPricesSummery from "./OrderPricesSummery";
import PaymentOptions from "./PaymentOptions";
import ProductsList from "./ProductsList";
import { useSelector } from "react-redux";

const OrderSummery = () => {
  const { cart, loading, error } = useFetchCart();
  const { products } = useSelector((state) => state.cart);

  return (
    <div className="flex w-full max-w-lg flex-col items-start space-y-4 rounded-md bg-gray-100 p-4">
      <h4 className="text-lg font-semibold">YOUR ORDER</h4>
      <OrderPricesSummery />
      <PaymentOptions />
      <PlaceOrderButton />
      <ProductsList products={products} />
    </div>
  );
};

export default OrderSummery;
