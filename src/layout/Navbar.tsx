"use client";
import { useCart } from "@/context/AppContext";
import { LanguageType } from "@/types/type";
import {
  HeartIcon,
  MapPinIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>("EN");
  const selectRef = useRef<HTMLSelectElement>(null);

  const { handleLanguage, handleTheme, theme, language } = useCart();

  const handleSelectedLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as LanguageType;
    setSelectedLanguage(value);
    sendToContext(value);
  };
  const sendToContext = (language: LanguageType) => {
    handleLanguage(language);
  };

  console.log(language);
  return (
    <nav className="w-full flex flex-col items-center justify-center py-2 ">
      {/* top */}
      <div className="w-full flex  flex-col md:flex-row gap-4 justify-between items-center py-2 md:px-32 lg:px-64 ">
        <div className="flex items-center  justify-center">
          <MapPinIcon className="w-4 text-black " />
          <p className="text-gray text-xs md:text-lg">
            Tabriz Roshdiye paladiom complex
          </p>
        </div>

        <div className="flex items-center gap-2 md:gap-6 text-black    text-sm">
          {/* them */}
          <button
            onClick={handleTheme}
            className="bg-blue-400 p-2 rounded-xl w-14 lg:w-22 font-bold text-white border-1 border-blue-700 hover:bg-blue-500 duration-500 transition-all cursor-pointer"
          >
            {theme === false ? "Light" : "Dark"}
          </button>
          {/*  */}
          <select
            value={selectedLanguage}
            ref={selectRef}
            onChange={handleSelectedLanguage}
          >
            <option value="EN">English</option>
            <option value="FA">فارسی</option>
          </select>
          <select>
            <option value="USD">USD</option>
            <option value="IRR">IRR</option>
          </select>

          <div className="text-xs md:text-lg">
            <Link href={"/"}>Sign in</Link>
            <span className="mx-2 md:mx-4">/</span>
            <Link href={"/"}>Sign Up</Link>
          </div>
        </div>
      </div>
      {/* top */}
      <div className="w-full h-[0.5px] bg-gray-200"></div>

      {/* middle */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between py-6 md:px-32 lg:px-64 ">
        <div className="my-4 font-bold text-2xl">
          <Link href={"/"} className="text-black ">
            Hossiiw
          </Link>
        </div>

        <div className="bg-green-300 w-[80%] my-3 md:w-[50%] p-2 flex items-center justify-center rounded-lg border-2 border-green-600">
          <ul className="flex gap-8 font-bold text-green-950 ">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Menu</Link>
            </li>
            <li>
              <Link href={"/"}>Contact us</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 cursor-pointer">
          <HeartIcon className="w-8 h-8 text-black " />
          <span className="w-[0.5px] h-5 bg-text-gray"></span>
          {/*  */}
          <div className="flex justify-center items-center gap-2">
            <div className="relative">
              <ShoppingCartIcon className="w-8 h-8 cursor-pointer text-black " />
              <span className="absolute -top-2 right-0 bg-green-700 w-5 h-5 rounded-full flex items-center justify-center font-bold text-white text-xs">
                2
              </span>
            </div>
            <div className="mt-2">
              <p className="text-gray  text-sm text-black ">Shopping cart :</p>
              <span className="font-bold text-black ">$500</span>
            </div>
          </div>
        </div>
      </div>
      {/* middle */}
    </nav>
  );
}

export default Navbar;
