import React, { useContext } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import { useDispatch } from "react-redux";
import { useCart } from "../../hooks/useCart";
import { removeGuestProduct, updateGuestQuantity } from "../../store/CartSlice";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styled from "styled-components";

const CartProducts = () => {
  const { currentUser } = useContext(AuthContext);
  const { cartItems, updateItem, removeItem } = useCart();
  const dispatch = useDispatch();

  const handleDeleteProduct = async (product) => {
    if (currentUser === "guest") {
      dispatch(removeGuestProduct(product));
    } else {
      await removeItem(product.bookId);
    }
  };

  const handleUpdateQuantity = async (product, newQuantity) => {
    if (currentUser === "guest")
      dispatch(
        updateGuestQuantity({ bookId: product.bookId, quantity: newQuantity }),
      );
    else await updateItem({ bookId: product.bookId, quantity: newQuantity });
  };

  return (
    <CartContainer>
      {cartItems.map((product, index) => (
        <CartItemCard key={product.bookId}>
          <ProductImage src={product.image} alt={product.name} />
          <Productdetails>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>Price:{product.price} EGP</ProductPrice>
          </Productdetails>
          <div className="relative min-w-10">
            <QuantitySelector
              value={product.quantity}
              onChange={(e) =>
                handleUpdateQuantity(product, Number(e.target.value))
              }
            >
              {[...Array(10).keys()].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </QuantitySelector>
            <ArrowDropDownIcon className="pointer-events-none absolute right-2 top-2" />
          </div>
          <CartTotals>
            <span>Subtotal:</span>
            <span className="lg:ml-1">
              {product.quantity * product.price} EGP
            </span>
          </CartTotals>
          <div className="flex h-full justify-center lg:justify-start">
            <Tooltip arrow title="Remove" placement="right-start">
              <IconButton
                color="default"
                size="small"
                sx={{ width: "fit-content", height: "fit-content" }}
                onClick={() => handleDeleteProduct(product)}
              >
                <CloseIcon sx={{ fontSize: "1rem" }} />
              </IconButton>
            </Tooltip>
          </div>
        </CartItemCard>
      ))}
    </CartContainer>
  );
};

export default CartProducts;

const CartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgb(0 0 0 / 0.1);
`;
const CartItemCard = styled.div`
  display: flex;
  flex-direction: column;
  /* background: rgb(243 244 246); */
  border-bottom: 1px solid rgb(243 244 246);
  margin-block: 0.875rem;
  padding: 1.5rem;
  border-radius: 8px;
  /* box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1); */
  gap: 12px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;
const ProductImage = styled.img`
  width: 150px;
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
