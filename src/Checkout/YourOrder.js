import React from "react";
import { useSelector } from "react-redux";

const YourOrder = () => {
  const { products, total } = useSelector((state) => state.cart);

  return (
    <div>
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
            <tr key={index}>
              <td className="flex text-xs">
                <img
                  src={product.image}
                  alt={product.name}
                  className="mr-2 h-28 w-24 object-cover"
                />
                <p>{product.name}</p>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourOrder;
