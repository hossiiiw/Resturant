import Image from "next/image";
import React from "react";
import db from "./../../../data/db.json";
import MenuCounterBtn from "@/modules/Menu/components/MenuCounetBtn";
import { TrashIcon } from "@heroicons/react/24/outline";
function CartItem() {
  const image = db.menu;

  return (
   
      <div className="flex flex-col gap-4  md:grid grid-cols-4 grid-rows-1 md:gap-16 md:items-center  text-white mt-8 p-4 rounded bg-blue-300">
        <div className="mx-auto md:mx-none">
          <Image
            src={image[0].image}
            alt={image[0].name.fa}
            className="rounded-xl"
            width={100}
            height={110}
          ></Image>
        </div>
        <div className="col-span-2 flex flex-col items-center">
          <p className="text-sm md:text-xl mb-10 text-blue-900">
            Tomato Toast <span className="md:ml-16 text-blue-900">50$</span>
          </p>
          <span className=" text-xs text-blue-800 ">
            Lorem ipsum dolor sit amet, consectetur
          </span>
        </div>
        <div className="col-start-4 flex items-center justify-center gap-4 ">
          <MenuCounterBtn />
          <TrashIcon className="w-8 text-red-500" />
        </div>
      </div>
  
  );
}

export default CartItem;
