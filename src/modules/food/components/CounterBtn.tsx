import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import React from "react";

function CounterBtn() {
  return (
    <>
      <div className="flex justify-around items-center mt-4">
        <button>
          <PlusIcon className="text-green-400 bg-green-200 w-8 h-8 rounded cursor-pointer" />
        </button>
        <span>0</span>
        <button>
          <MinusIcon className="text-red-400 bg-red-200 w-8 h-8 rounded cursor-pointer" />
        </button>
      </div>
    </>
  );
}

export default CounterBtn;
