"use client";
import Image from "next/image";
import React from "react";
import db from "./../../../data/db.json";
import AddBtn from "./AddBtn";
import { useCart } from "@/context/AppContext";
import { formatMoney } from "@/utils/formatMonet";

function FoodItem() {
  const image = db.menu;
  const { language } = useCart();
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
        <p className="p-2">
          {language === "en" ? "$24" : "ریال" + formatMoney("450000")}
        </p>
        <AddBtn />
        {/* <CounterBtn /> */}
      </div>
    </div>
  );
}

export default FoodItem;
