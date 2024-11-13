import React, { useContext } from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { IconButton, Tooltip } from "@mui/material";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import CloseIcon from "@mui/icons-material/Close";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { AuthContext } from "../../context/AuthContext";
import useFetchCart from "../../hooks/useFetchCart";
import UseDeleteCartItem from "../../hooks/useDeleteCartItem";
import useUpdateCartQuantity from "../../hooks/useUpdateCartQuantity";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { truncate } from "lodash";

const NewCart = () => {
  const { currentUser } = useContext(AuthContext);
  const { cart, loading, error } = useFetchCart();
  const { deleteCartItem } = UseDeleteCartItem(currentUser);
  const { updateProductQuantity } = useUpdateCartQuantity(currentUser);
  const { products } = useSelector((state) => state.cart);

  return (
    <CartContainer>
      {products.map((product) => (
        <CartItemCard key={product.bookId}>
          <ProductImage src={product.image} alt={product.name} />
          <Productdetails>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>Price:{product.price}</ProductPrice>
          </Productdetails>
          <div className="relative min-w-16">
            <QuantitySelector
              value={product.quantity}
              onChange={(e) =>
                updateProductQuantity(product, Number(e.target.value))
              }
            >
              {[...Array(10).keys()].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </QuantitySelector>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="currentColor"
              class="pointer-events-none absolute right-2.5 top-2.5 ml-1 h-5 w-5 text-slate-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>

          <CartTotals>
            <span>Subtotal:</span>
            <span>{product.quantity * product.price} EGP</span>
          </CartTotals>
          <Tooltip title="Remove">
            <IconButton
              color="default"
              size="small"
              onClick={() => deleteCartItem(product)}
            >
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </CartItemCard>
      ))}
    </CartContainer>
  );
};

export default NewCart;

const CartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const CartItemCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  margin-block: 0.875rem;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  gap: 12px;
  @media (min-width: 768px) {
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }
`;
const ProductImage = styled.img`
  width: 80px;
  height: auto;
  border-radius: 8px;
`;
const Productdetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const ProductName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
const ProductPrice = styled.p`
  font-size: 14px;
  color: #666;
`;
const QuantitySelector = styled.select`
  padding: 0.625rem;
  border-radius: 0.5rem;
  appearance: none;
  border-width: 1px;
  border-color: #d1d5db;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #111827;
  width: 4rem;
  outline: none;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CartTotals = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
`;
