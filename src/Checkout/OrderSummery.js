import React from "react";
import PlaceOrderButton from "./PlaceOrderButton";
import useFetchCart from "../hooks/useFetchCart";
import OrderPricesSummery from "./OrderPricesSummery";
import PaymentOptions from "./PaymentOptions";
import ProductsList from "./ProductsList";

const OrderSummery = () => {
  const { cart, loading, error } = useFetchCart();

  return (
    <div className="flex w-full max-w-lg flex-col items-start space-y-4 rounded-md bg-gray-100 p-4">
      <h4 className="text-lg font-semibold">YOUR ORDER</h4>
      <OrderPricesSummery />
      <PaymentOptions />
      <PlaceOrderButton />
      <ProductsList />
    </div>
  );
};

export default OrderSummery;
