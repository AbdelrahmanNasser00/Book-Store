import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { IconButton } from "@mui/material";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  updateCart,
  updateQuantity,
} from "../../store/CartSlice";
import { fetchCart, removeCartItem, updateCartItem } from "../../api";
import { AuthContext } from "../../context/AuthContext";
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
  const { products } = useSelector((state) => state.cart);
  console.log("cart table products", products);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCart = async () => {
      if (currentUser !== "guest") {
        const res = await fetchCart();
        if (!res.error && res.status >= 200 && res.status < 300) {
          dispatch(updateCart(res.data.cart));
        } else {
          alert("Failed to update cart");
          console.error(res.ex);
        }
      }
    };
    getCart();
  }, [dispatch]);

  const handleDelete = async (product) => {
    console.log(product);

    try {
      if (currentUser !== "guest") {
        const res = await removeCartItem(product.bookId);
        if (!res.error && res.status >= 200 && res.status < 300) {
          dispatch(removeProduct(product));
        } else {
          alert("Failed to delete product");
          console.error(res.ex);
        }
      } else {
        dispatch(removeProduct(product));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleQuantity = async (product, boolean) => {
    const updatedProduct = {
      bookId: product.bookId,
      quantity: boolean ? product.quantity + 1 : product.quantity - 1,
    };
    if (currentUser !== "guest") {
      const res = await updateCartItem(updatedProduct);
      if (!res.error && res.status >= 200 && res.status < 300) {
        dispatch(updateQuantity(updatedProduct));
      } else {
        alert("Failed to update quantity");
      }
    } else {
      dispatch(updateQuantity(updatedProduct));
    }
  };

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
                onClick={() => handleQuantity(product, false)}
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
                onClick={() => handleQuantity(product, true)}
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
