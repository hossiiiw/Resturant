import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import React from "react";

function MenuCounterBtn() {
  return (
    <div className="flex items-center justify-center gap-6">
      <button>
        <PlusIcon className="w-8 text-orange-300 cursor-pointer" />
      </button>
      <span className="font-bold text-xl">0</span>
      <button>
        <MinusIcon className="w-8 text-red-500  cursor-pointer" />
      </button>
    </div>
  );
}

export default MenuCounterBtn;
