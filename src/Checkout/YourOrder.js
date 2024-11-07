import React, { useContext } from "react";
import { useSelector } from "react-redux";
import PlaceOrderButton from "./PlaceOrderButton";
import CheckoutContext from "../context/CheckoutContext";

const YourOrder = () => {
  const { products, total } = useSelector((state) => state.cart);
  const { paymentOption, handlePaymentChange } = useContext(CheckoutContext);

  return (
    <div className="flex w-full max-w-lg flex-col items-center">
      <div className="flex w-full flex-col">
        <h4>YOUR ORDER</h4>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border border-gray-400">
                <td className="flex text-xs">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mr-2 h-14 w-11 object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">{product.name}</span>
                    <span>Price: {product.price} EGP</span>
                    <span>Quantity: {product.quantity}</span>
                  </div>
                </td>
                <td>
                  <span className="text-sm font-bold">
                    {product.price * product.quantity} EGP
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border border-gray-400">
              <th>Subtotal</th>
              <td colSpan={2}>
                <span className="text-md text-sm text-sky-600">
                  {total} EGP
                </span>
              </td>
            </tr>
            <tr className="border border-gray-400">
              <th>Shipping</th>
              <td colSpan={2}>
                <span className="text-sm text-sky-600">150 EGP</span>
              </td>
            </tr>
            <tr className="border border-gray-400">
              <th>Total</th>
              <td colSpan={2}>
                <span className="font-bold text-sky-600">
                  {total + 150} EGP
                </span>
              </td>
            </tr>
          </tfoot>
        </table>
        <div>
          <ul className="m-2 p-0">
            <li>
              <input
                type="radio"
                name="paymentMethod"
                className="mr-2"
                id="cashOnDelivery"
                value="cashOnDelivery"
                checked={paymentOption === "cashOnDelivery"}
                onChange={(e) => handlePaymentChange(e.target.value)}
              />
              <label htmlFor="cashOnDelivery">
                Cash on delivery - عند الاستلام
              </label>
            </li>
            <li>
              <input
                className="mr-2"
                type="radio"
                name="paymentMethod"
                id="debitCreditCard"
                value="debitCreditCard"
                checked={paymentOption === "debitCreditCard"}
                onChange={(e) => handlePaymentChange(e.target.value)}
              />
              <label htmlFor="debitCreditCard">Debit/Credit Card</label>
            </li>
          </ul>
        </div>

        <PlaceOrderButton />
      </div>
    </div>
  );
};

export default YourOrder;
