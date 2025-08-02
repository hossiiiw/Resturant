import React from "react";
import db from "./../../../data/db.json";
import Image from "next/image";
import { PlusIcon } from "@heroicons/react/24/outline";
import MenuCounterBtn from "./MenuCounetBtn";

function MenuFoodItem() {
  const image = db.menu;

  return (
    <div className="flex flex-col gap-4  md:grid grid-cols-4 grid-rows-1 md:gap-16 md:items-center  text-white mt-16">
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
        <p className="text-sm md:text-xl mb-10">
          Tomato Toast <span className="md:ml-16 text-orange-300">50$</span>
        </p>
        <span className="text-gray-400 text-xs ">Lorem ipsum dolor sit amet, consectetur</span>
      </div>
      <div className="col-start-4">
       <MenuCounterBtn/>
      </div>
    </div>
  );
}

export default MenuFoodItem;
