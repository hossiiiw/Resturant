"use client";
import Image from "next/image";
import React from "react";
import db from "./../../../data/db.json";
import AddBtn from "./AddBtn";
import CounterBtn from "./CounterBtn";

function FoodItem() {
  const image = db.menu;
  return (
    <div className="food-bg p-4 rounded-xl mt-12 ">
      <Image
        src={image[0].image}
        width={300}
        height={300}
        alt="test"
        className="w-52 h-52 object-contain rounded-lg"
      ></Image>
      <div className="flex flex-col ">
        <div className="flex justify-between p-2">
          <p>Soup</p>
          <span>4.1+</span>
        </div>
        <p className="p-2">20000</p>
        <AddBtn />
        {/* <CounterBtn /> */}
      </div>
    </div>
  );
}

export default FoodItem;
