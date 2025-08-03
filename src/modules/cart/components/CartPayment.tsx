import React from "react";

function CartPayment() {
  return (
    <>
      <div className=" row-span-1 flex flex-col items-center bg-gray-200 rounded-2xl p-4 border-2 border-blue-400">
        <h1 className="font-bold text-xl my-4">Bill</h1>
        <div className="w-full flex flex-col">
          <div className="mx-auto">
            <input
              type="text"
              placeholder="offer code"
              className="p-2 bg-blue-300 rounded-l-xl"
            />
            <button className="bg-blue-300 p-2 rounded-r-xl border-l-[0.5px] cursor-pointer ">
              Checking
            </button>
          </div>
          <div className="w-full p-4 font-bold">
            <div className=" flex justify-between bg-gray-100 p-2 my-2 rounded">
              <p>مبلغ کل : </p>
              <span>200</span>
            </div>
            <div className="flex justify-between bg-gray-100 p-2 my-2 rounded">
              <p>مبلغ بعد از تخقیف : </p>
              <span>2000</span>
            </div>
          </div>
        </div>
        <button className="w-full bg-blue-400 p-2 rounded-xl font-bold text-xl text-blue-900 hover:bg-blue-500 hover:text-white transition-all duration-150 cursor-pointer">
          Pay
        </button>
      </div>
    </>
  );
}

export default CartPayment;
