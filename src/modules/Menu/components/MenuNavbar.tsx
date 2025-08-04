"use client";
import React from "react";
import { useTranslation } from "react-i18next";

function MenuNavbar() {
  const { t } = useTranslation();
  return (
    <div className="flex w-full justify-around p-4 font-bold text-sm md:text-xl text-white border-2 border-orange-300 rounded-2xl">
      <p className="hover:text-orange-300 transition-all duration-150 cursor-pointer">
        {t("MenuFilter.fastfood")}
      </p>
      <p className="hover:text-orange-300 transition-all duration-150 cursor-pointer">
        {t("MenuFilter.kebab")}
      </p>
      <p className="hover:text-orange-300 transition-all duration-150 cursor-pointer">
        {t("MenuFilter.drink")}
      </p>
      <p className="hover:text-orange-300 transition-all duration-150 cursor-pointer">
        {t("MenuFilter.desert")}
      </p>
    </div>
  );
}

export default MenuNavbar;
