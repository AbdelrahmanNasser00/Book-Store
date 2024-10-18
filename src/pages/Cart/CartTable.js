import React, { useState } from "react";
import styled from "styled-components";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { IconButton } from "@mui/material";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, updateQuantity } from "../../store/CartSlice";
const Table = styled.table`
  border-collapse: collapse;
  margin-top: 20px;
  padding: 20px;
  /* width: 66.6%; */
`;
const TableHead = styled.thead`
  border-bottom: 1px solid rgba(0, 0, 0, 0.075);
  background-color: white;
  color: black;
`;
const TableBody = styled.tbody``;
const TableRow = styled.tr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.105);
`;
const TableData = styled.td`
  align-items: center;
`;

const CartTable = () => {
  const { products, quantity, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleDelete = (product) => {
    dispatch(removeProduct(product));
  };
  const handleIncreaseQuantity = (product) => {
    const updatedProduct = {
      ...product,
      quantity: product.quantity + 1,
    };
    console.log(product);
    dispatch(updateQuantity(updatedProduct));
  };
  const handleDecreaseQuantity = (product) => {
    const updatedProduct = {
      ...product,
      quantity: product.quantity - 1,
    };
    if (updatedProduct.quantity > 0) {
      dispatch(updateQuantity(updatedProduct));
    } else {
      alert("Quantity cannot be less than 1");
    }
  };
  return (
    <Table>
      <TableHead>
        <tr key="">
          <th></th>
          <th>Product Name</th>
          <th style={{ fontWeight: "bold" }}>Price</th>
          <th style={{ textAlign: "center" }}>Quantity</th>
          <th style={{ textAlign: "center" }}>Subtotal</th>
        </tr>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow
            key={product._id}
            style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.105)" }}>
            <TableData>
              <IconButton color="error" onClick={() => handleDelete(product)}>
                <DeleteRoundedIcon />
              </IconButton>
            </TableData>
            <TableData style={{ display: "flex" }}>
              {" "}
              <img
                className="product-img"
                src={product.image}
                alt={product.name}
                style={{ width: "50px", marginRight: "15px" }}
              />
              {product.name}
            </TableData>
            <TableData>{product.price}</TableData>
            <TableData style={{ textAlign: "center" }}>
              <IconButton
                onClick={() => handleDecreaseQuantity(product)}
                size="small"
                sx={{
                  backgroundColor: "rgb(0, 0, 0, 0.1)",
                }}>
                <RemoveRoundedIcon fontSize="15" />
              </IconButton>
              <input
                type="number"
                value={product.quantity}
                readOnly
                style={{
                  maxWidth: "45px",
                  textAlign: "center",
                  border: "none",
                  appearance: "none",
                  MozAppearance: "textfield",
                }}
              />
              <IconButton
                onClick={() => handleIncreaseQuantity(product)}
                size="small"
                sx={{
                  backgroundColor: "rgb(0, 0, 0, 0.1)",
                }}>
                <AddRoundedIcon fontSize="15" />
              </IconButton>
            </TableData>
            <TableData style={{ textAlign: "center" }}>
              {product.quantity * product.price}
            </TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CartTable;
