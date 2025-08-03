import React from "react";
import CartPayment from "../components/CartPayment";
import CartItem from "../components/CartItem";

function CartPageViews() {
  return (
    <>
      <div className="flex flex-col p-2 md:p-0 md:grid grid-cols-4 grid-rows-5 gap-4">
        <CartPayment />
        {/*  */}

        <div className="col-span-3 row-span-4 bg-gray-200 rounded-2xl p-4 border-2 border-blue-400">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    </>
  );
}

export default CartPageViews;
