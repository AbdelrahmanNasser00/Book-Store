import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProceedToCheckoutButton from "../../Checkout/ProceedToCheckoutButton";

const CartTotalsContainer = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  border: 1px solid rgba(0, 0, 0, 0.105);
  max-width: 33%;
  @media (max-width: 1023px) {
    max-width: 100%;
  }
`;

const CartTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;

const CartRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 0.7rem;
`;

const SubtotalRow = styled(CartRow)`
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const TotalAmount = styled.h2`
  font-size: 1rem;
  color: #f97316;
  font-weight: bold;
`;

const ChangeAddress = styled.a`
  color: #f97316;
  text-decoration: none;
  cursor: pointer;
`;

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
    <div className="rounded-lg bg-gray-100 p-8 text-lg font-medium leading-7 text-gray-900">
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
