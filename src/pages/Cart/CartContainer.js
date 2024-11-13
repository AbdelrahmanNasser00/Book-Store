import React from "react";
import CartTable from "./CartTable";
import CartTotals from "./CartTotals";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 50vh;
  gap: 30px;
  max-width: 1200px;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

const CartContainer = () => {
  return (
    <div className="my-5 flex w-full items-center justify-center">
      <Wrapper>
        <CartTable />
        <CartTotals />
      </Wrapper>
    </div>
  );
};

export default CartContainer;
