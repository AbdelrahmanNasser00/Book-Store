import React, { useContext } from "react";
import styled from "styled-components";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { IconButton } from "@mui/material";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { AuthContext } from "../../context/AuthContext";
import useFetchCart from "../../hooks/useFetchCart";
import UseDeleteCartItem from "../../hooks/useDeleteCartItem";
import useUpdateCartQuantity from "../../hooks/useUpdateCartQuantity";
import { useSelector } from "react-redux";
const Table = styled.table`
  border-collapse: collapse;
  margin-top: 20px;
  padding: 20px;
  height: fit-content;
  /* width: 66.6%; */
`;
const TableHead = styled.thead`
  border-bottom: 1px solid rgba(0, 0, 0, 0.075);
  background-color: white;
  color: black;
  height: fit-content;
`;
const TableBody = styled.tbody``;
const TableRow = styled.tr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.105);
  height: fit-content;
`;
const TableData = styled.td`
  align-items: center;
`;

const CartTable = () => {
  const { currentUser } = useContext(AuthContext);
  const { cart, loading, error } = useFetchCart();
  const { deleteCartItem } = UseDeleteCartItem(currentUser);
  const { updateProductQuantity } = useUpdateCartQuantity(currentUser);
  const { products } = useSelector((state) => state.cart);

  return (
    <Table>
      <TableHead>
        <tr>
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
            key={product.bookId}
            style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.105)" }}
          >
            <TableData>
              <IconButton color="error" onClick={() => deleteCartItem(product)}>
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
                onClick={() => updateProductQuantity(product, false)}
                size="small"
                sx={{
                  backgroundColor: "rgb(0, 0, 0, 0.1)",
                }}
              >
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
                onClick={() => updateProductQuantity(product, true)}
                size="small"
                sx={{
                  backgroundColor: "rgb(0, 0, 0, 0.1)",
                }}
              >
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
