import { useSelector } from "react-redux";

const OrderPricesSummery = () => {
  const { total } = useSelector((state) => state.cart);
  return (
    <div className="w-full space-y-2 rounded-lg bg-white p-4 shadow-md">
      <div className="flex justify-between">
        <span className="text-sm">Subtotal</span>
        <span className="text-sm font-medium">{total} EGP</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm">Shipping</span>
        <span className="text-sm font-medium">150 EGP</span>
      </div>
      <div className="flex justify-between border-t pt-2">
        <span className="font-semibold">Total</span>
        <span className="font-semibold text-indigo-600">{total + 150} EGP</span>
      </div>
    </div>
  );
};

export default OrderPricesSummery;
