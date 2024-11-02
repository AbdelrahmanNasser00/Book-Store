import React from "react";
import CartTable from "./CartTable";
import CartTotals from "./CartTotals";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 50vh;
  gap: 30px;
`;

const CartContainer = () => {
  return (
    <div className="container" style={{ paddingTop: "40px" }}>
      <Wrapper>
        <CartTable />
        <CartTotals />
      </Wrapper>
    </div>
  );
};

export default CartContainer;
