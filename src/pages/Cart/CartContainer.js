import React from "react";
import CartProducts from "./CartProducts";
import CartTotals from "./CartTotals";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 50vh;
  gap: 30px;
  width: 100%;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1024px) {
    max-width: 1200px;
  }
`;

const CartContainer = () => {
  return (
    <div className="my-5 flex w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex w-full justify-center lg:max-w-[1200px] lg:justify-start">
        <h1 className="w-full px-4 py-4 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900 sm:text-3xl lg:w-2/3 lg:px-0 lg:text-left">
          Shopping Cart
        </h1>
      </div>
      <Wrapper>
        <CartProducts />
        <CartTotals />
      </Wrapper>
    </div>
  );
};

export default CartContainer;
