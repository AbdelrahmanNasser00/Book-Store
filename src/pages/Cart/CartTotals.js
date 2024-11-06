import React, { useContext } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProceedButton from "../../Checkout/ProceedButton";

const CartTotalsContainer = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  border: 1px solid rgba(0, 0, 0, 0.105);
  max-width: 33%;
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
    <CartTotalsContainer>
      <CartTitle>Cart Totals</CartTitle>

      <SubtotalRow>
        <span>Subtotal</span>
        <span>{parseFloat(total).toFixed(2)} EGP</span>
      </SubtotalRow>

      <CartRow style={{ justifyContent: "end" }}>
        <span>Upper Egypt Shipping: 80 EGP</span>
      </CartRow>

      <CartRow>
        <span>Shipping</span>
        <span>
          Shipping to <strong>asyut, Assuit.</strong>
        </span>
      </CartRow>

      <ChangeAddress>Change address</ChangeAddress>

      <CartRow>
        <TotalAmount>Total</TotalAmount>
        <TotalAmount>{total > 0 ? finalAmount : 0} EGP</TotalAmount>
      </CartRow>

      <ProceedButton cart={cart} />

      <InfoText>
        <strong>Payment methods:</strong>
      </InfoText>
      <InfoText>
        <strong>Delivery information:</strong> We deliver through a shipping
        company. Duration is 2-4 working days.
      </InfoText>
      <InfoText>
        <strong>Quality Guarantee:</strong> We provide full replacement of
        defective items.
      </InfoText>
    </CartTotalsContainer>
  );
};

export default CartTotals;
