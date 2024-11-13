import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProceedToCheckoutButton from "../../Checkout/ProceedToCheckoutButton";

const InfoText = styled.p`
  margin-top: 15px;
  font-size: 0.7rem;
  color: #333;
`;

const CartTotals = () => {
  const { total } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart.products);
  const shipping = 80;
  const finalAmount = total > 0 ? (parseFloat(total) + shipping).toFixed(2) : 0;
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="max-h-fit rounded-lg bg-gray-100 p-8 text-lg font-medium leading-7 text-gray-900">
      <h5>Order summary</h5>
      <div className="mt-8">
        <div className="flex flex-row items-center justify-between">
          <span className="text-sm leading-5 text-gray-600">Subtotal</span>
          <span className="text-sm leading-5 text-gray-600">
            {total + " EGP"}
          </span>
        </div>
        <div className="mt-4 flex flex-row items-center justify-between border-t border-gray-200 pt-4">
          <span className="text-sm leading-5 text-gray-600">Flat Shipping</span>
          <span className="text-sm leading-5 text-gray-600">100 EGP</span>
        </div>
        <div className="mt-4 flex flex-row items-center justify-between border-t border-gray-200 pt-4">
          <span className="text-base leading-6">Order total</span>
          <span className="text-base leading-6">{total + 100 + " EGP"}</span>
        </div>
        <ProceedToCheckoutButton />
      </div>
      <InfoText>
        <strong>Delivery information:</strong> We deliver through a shipping
        company. Duration is 2-4 working days.
      </InfoText>
      <InfoText>
        <strong>Quality Guarantee:</strong> We provide full replacement of
        defective items.
      </InfoText>
    </div>
  );
};

export default CartTotals;
