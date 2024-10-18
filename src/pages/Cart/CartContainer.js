import React from "react";
import CartTable from "./CartTable";
import CartTotals from "./CartTotals";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 50vh;
  gap: 30px;
`;

const CartContainer = () => {
  const cart = useSelector((state) => state.cart.products);
  console.log(cart);
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
