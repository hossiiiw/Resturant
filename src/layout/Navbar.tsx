"use client";
import { useCart } from "@/context/AppContext";
import { formatMoney } from "@/utils/formatMonet";
import {
  HeartIcon,
  MapPinIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  const { handleTheme, hanleLanguage, theme, language, money } = useCart();
  const lang = language === "en" ? "fa" : "en";

  const switchLang = async (lng: "en" | "fa") => {
    i18n.changeLanguage(lng);
    hanleLanguage(lng);
  };

  return (
    <nav className="w-full flex flex-col items-center justify-center py-2 ">
      {/* top */}
      <div className="w-full flex  flex-col md:flex-row gap-4 justify-between items-center py-2 md:px-32 lg:px-64 ">
        <div className="flex items-center  justify-center">
          <MapPinIcon className="w-4 text-black " />
          <p className="text-gray text-xs md:text-lg">{t("Address")}</p>
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
          <button onClick={() => switchLang(lang)}>
            {language === "en" ? "FA" : "EN"}
          </button>
          <div className="text-xs md:text-lg">
            <Link href={"/login"}>{t("SignIn")}</Link>
            <span className="mx-2 md:mx-4">/</span>
            <Link href={"/signUp"}>{t("SignUp")}</Link>
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
              <Link href={"/"}>{t("Home")}</Link>
            </li>
            <li>
              <Link href={"/menu"}>{t("Menu")}</Link>
            </li>
            <li>
              <Link href={"/"}>{t("Contact us")}</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 cursor-pointer">
          <HeartIcon className="w-8 h-8 text-black " />
          <span className="w-[0.5px] h-5 bg-text-gray"></span>
          {/*  */}
          <div className="flex justify-center items-center gap-2">
            <Link href={"/cart"} className="relative">
              <ShoppingCartIcon className="w-8 h-8 cursor-pointer text-black " />
              <span className="absolute -top-2 right-0 bg-green-700 w-5 h-5 rounded-full flex items-center justify-center font-bold text-white text-xs">
                2
              </span>
            </Link>
            <div className="mt-2">
              <p className="text-gray  text-sm text-black ">
                {t("ShoppingCart")} :
              </p>
              <span className="font-bold text-black ">
                {/* {language === "en" ? "$400" : "ریال " + formatMoney("200000")} */}
                {money === "en" ? "$400" : "ریال " + formatMoney("200000")}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* middle */}
    </nav>
  );
}

export default Navbar;
