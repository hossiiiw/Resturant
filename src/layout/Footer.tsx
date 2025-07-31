"use client";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col items-center justify-center bg-black p-12 ">
      {/* top */}
      <div className="grid grid-cols-2 md:grid-cols-6 grid-rows-2 h-[40vh] gap-22 w-[70%]">
        {/* ------------------------------ */}
        <div className="col-span-2 flex flex-col items-start gap-6 text-white">
          <h1 className="font-bold text-3xl ">{t("footer.logo")}</h1>
          <div className="w-full h-[0.5px] bg-gray-400"></div>
          <p className="w-[100%] md:w-[70%] text-xs md:text-xl">
            {t("Address")}
          </p>
          <div className="grid grid-cols-2  md:flex justify-center gap-8 md:gap-4">
            <Link target="_blank" href={"https://t.me/hossiiiw"}>
              <FaTelegram className="text-2xl text-black bg-white w-12 h-12 md:w-16 md:h-16 rounded-full p-2 md:p-3 hover:bg-orange-400 transition-all duration-300 cursor-pointer " />
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fhossiiiw%2F&is_from_rle"
              }
            >
              <FaInstagram className="text-2xl text-black bg-white w-12 h-12 md:w-16 md:h-16 rounded-full p-2 md:p-3 hover:bg-orange-400 transition-all duration-300 cursor-pointer " />
            </Link>
            <Link target="_blank" href={"https://github.com/hossiiiw"}>
              <FaGithub className="text-2xl text-black bg-white w-12 h-12 md:w-16 md:h-16 rounded-full p-2 md:p-3 hover:bg-orange-400 transition-all duration-300 cursor-pointer " />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/hossein-imani-98a40b1a5/"}
            >
              <FaLinkedin className="text-2xl text-black bg-white w-12 h-12 md:w-16 md:h-16 rounded-full p-2 md:p-3 hover:bg-orange-400 transition-all duration-300 cursor-pointer " />
            </Link>
          </div>
        </div>
        {/* ------------------------------ */}
        <div className="col-start-3  flex flex-col gap-3 text-white ">
          <h2 className="text-xl">{t("footer.link.title")}</h2>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            {t("footer.link.about")}
          </Link>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            {t("footer.link.meet")}
          </Link>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            {t("footer.link.case")}
          </Link>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            {t("footer.link.latest")}
          </Link>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            {t("footer.link.contact")}
          </Link>
        </div>
        {/* ------------------------------ */}
        <div className="col-start-4 hidden md:flex flex-col gap-3 text-white none">
          <h2 className="text-xl">{t("footer.other.title")}</h2>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            {t("footer.other.careers")}
          </Link>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            {t("footer.other.creative")}
          </Link>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            {t("footer.other.digital")}
          </Link>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            {t("footer.other.marketing")}
          </Link>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            {t("footer.other.services")}
          </Link>
        </div>
        {/* ------------------------------ */}
        <div className="col-span-2 col-start-5 hidden md:flex flex-col gap-3 text-white">
          <h2 className="text-xl">{t("footer.news.title")}</h2>
          <p className="text-lg w-[70%]">{t("footer.news.p")}</p>

          <div className="relative w-[100%] md:w-[100%] lg:w-[70%]">
            <input
              type="text"
              dir="ltr"
              placeholder={t("footer.news.email")}
              className="w-full input-bg p-5"
            />
            <BsSend className="w-12 h-12 p-3 bg-orange-400 rounded-full absolute right-5 top-2" />
          </div>
        </div>
        {/* ------------------------------ */}
      </div>

      <div className="w-[90%] md:w-[80%] h-[0.5px] bg-gray-400"></div>
      {/* top */}

      {/* bottom */}
      <div className="w-[70%] mt-8 flex-col md:flex justify-between items-center text-white">
        <p>{t("footer.allRight.title")}</p>
        <div className="hidden md:block">
          <Link href={""}>{t("footer.allRight.term")}</Link>
          <Link href={""} className="mx-2">{t("footer.allRight.privacy")}</Link>
        </div>
      </div>
      {/* bottom */}
    </div>
  );
}

export default Footer;
