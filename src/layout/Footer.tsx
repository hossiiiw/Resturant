import Link from "next/link";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsSend } from "react-icons/bs";

function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-black p-12 ">
      {/* top */}
      <div className="grid grid-cols-6 grid-rows-2 gap-22">
        {/* ------------------------------ */}
        <div className="col-span-2 flex flex-col items-start gap-6 text-white">
          <h1 className="font-bold text-3xl ">Hossiiw</h1>
          <div className="w-full h-[0.5px] bg-gray-400"></div>
          <p className="w-[70%] text-xl">
            1234, Restaurant St, South City New York 0124
          </p>
          <div className="flex justify-center gap-4">
            <Link target="_blank" href={"https://github.com/hossiiiw"}>
              <FaTelegram className="text-2xl text-black bg-white w-16 h-16 rounded-full p-3 hover:bg-orange-400 transition-all duration-300 cursor-pointer " />
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fhossiiiw%2F&is_from_rle"
              }
            >
              <FaInstagram className="text-2xl text-black bg-white w-16 h-16 rounded-full p-3 hover:bg-orange-400 transition-all duration-300 cursor-pointer " />
            </Link>
            <Link target="_blank" href={"https://github.com/hossiiiw"}>
              <FaGithub className="text-2xl text-black bg-white w-16 h-16 rounded-full p-3 hover:bg-orange-400 transition-all duration-300 cursor-pointer " />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/hossein-imani-98a40b1a5/"}
            >
              <FaLinkedin className="text-2xl text-black bg-white w-16 h-16 rounded-full p-3 hover:bg-orange-400 transition-all duration-300 cursor-pointer " />
            </Link>
          </div>
        </div>
        {/* ------------------------------ */}
        <div className="col-start-3 flex flex-col gap-3 text-white">
          <h2 className="text-xl">LINKS</h2>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            About Us
          </Link>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            Meet our team
          </Link>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            Case stories
          </Link>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            Latest news
          </Link>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            Contacnt
          </Link>
        </div>
        {/* ------------------------------ */}
        <div className="col-start-4  flex flex-col gap-3 text-white">
          <h2 className="text-xl">OTHER LINK</h2>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            Careers
          </Link>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            Creative Agency
          </Link>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            Digital Agency
          </Link>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            Marketing
          </Link>
          <Link
            href={""}
            className="hover:-translate-y-1 hover:text-orange-400 transition-all duration-300 text-lg "
          >
            Digital Services
          </Link>
        </div>
        {/* ------------------------------ */}
        <div className="col-span-2 col-start-5 flex flex-col gap-3 text-white">
          <h2 className="text-xl">NEWSLETTER</h2>
          <p className="text-lg w-[70%]">
            Subscribe us & receive our offers and updates your inbox directly
          </p>

          <div className="relative w-[70%]">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full input-bg p-5"
            />
            <BsSend className="w-12 h-12 p-3 bg-orange-400 rounded-full absolute right-5 top-2" />
          </div>
        </div>
        {/* ------------------------------ */}
      </div>

      <div className="w-[80%] h-[0.5px] bg-gray-400"></div>
      {/* top */}

      {/* bottom */}
      <div className="w-[80%] mt-8 flex justify-between items-center text-white">
        <p>All rights received 2025. Hossiiw Restaurant</p>
        <div>
          <Link href={""}>Terms Of Use</Link>
          <Link href={""}>Privacy Policy</Link>
        </div>
      </div>
      {/* bottom */}
    </div>
  );
}

export default Footer;
