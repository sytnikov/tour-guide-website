import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import FooterLogo from "@/public/footer-logo.png";
import FooterBackground from "@/public/footer-bg.png";
import FooterBackgroundMobile from "@/public/footer-bg-mobile.png";
import Link from "next/link";
import BgInstagram from "@/public/icon-bg-instagram.png";
import BgMail from "@/public/icon-bg-mail.png";
import BgGmail from "@/public/icon-bg-gmail.png";
import BgFacebook from "@/public/icon-bg-facebook.png";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative w-full h-[50rem] lg:h-[20rem] pt-28 lg:pt-48 pb-5">
      <Image
        src={FooterBackground}
        alt="footer section background"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }}
        className="absolute top-0 -z-[5] hidden lg:block"
      />
      <Image
        src={FooterBackgroundMobile}
        alt="footer section background"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }}
        className="absolute top-0 -z-[5] lg:hidden"
      />
      <Image
        src={FooterLogo}
        alt="Olga Korka logo"
        width={130}
        height={130}
        quality={95}
        className="absolute -top-16 lg:-top-10 left-5 lg:left-20 -z-[5] object-cover"
      />
      <div className="hidden lg:flex lg:flex-row items-center justify-center gap-10">
        <div>
          <p className="text-white text-lg">
            Вопросы по экскурсиям и не только
          </p>
        </div>
        <div>
          <p className="text-white text-lg">+358 45 3559757</p>
        </div>
        <div className="flex">
          <div className="flex gap-4">
            <div className="relative">
              <Image src={BgInstagram} alt="background image" width={70} />
              <Link
                href="#"
                className="absolute top-0 left-0 flex items-center justify-center w-full h-full"
              >
                <FaInstagram className="text-black text-3xl" />
              </Link>
            </div>
            <div className="relative">
              <Image src={BgMail} alt="background image" width={70} />
              <Link
                href="#"
                className="absolute top-0 left-0 flex items-center justify-center w-full h-full"
              >
                <CiMail className="text-black text-3xl" />
              </Link>
            </div>
            <div className="relative">
              <Image src={BgFacebook} alt="background image" width={70} />
              <Link
                href="#"
                className="absolute top-0 left-0 flex items-center justify-center w-full h-full"
              >
                <FaFacebook className="text-black text-3xl" />
              </Link>
            </div>
            <div className="relative">
              <Image src={BgGmail} alt="background image" width={70} />
              <Link
                href="#"
                className="absolute top-0 left-0 flex items-center justify-center w-full h-full"
              >
                <FaGoogle className="text-black text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* mobile footer */}
      <div className="flex flex-col lg:hidden items-start justify-center gap-10 text-white text-lg mx-10 mb-16">
        <div>
          <h3 className="uppercase font-medium">Ольга Корка</h3>
          <p className=" text-lg">Исскуствоведка, гид, арт-консультант</p>
        </div>
        <div>
          <h3 className="uppercase font-medium mb-4">Контакты</h3>
          <p>E-mail: olga.korka@gmail.com</p>
          <p className="text-lg">Тел: +358 45 3559757</p>
        </div>
        <div>
          <h3 className="uppercase font-medium mb-4">Меню</h3>
          <nav>
            <ul className="flex flex-col items-start text-nowrap gap-1 text-white">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex items-center lg:hidden justify-center gap-4">
        <div className="relative">
          <Image src={BgInstagram} alt="background image" width={70} />
          <Link
            href="#"
            className="absolute top-0 left-0 flex items-center justify-center w-full h-full"
          >
            <FaInstagram className="text-black text-3xl" />
          </Link>
        </div>
        <div className="relative">
          <Image src={BgMail} alt="background image" width={70} />
          <Link
            href="#"
            className="absolute top-0 left-0 flex items-center justify-center w-full h-full"
          >
            <CiMail className="text-black text-3xl" />
          </Link>
        </div>
        <div className="relative">
          <Image src={BgFacebook} alt="background image" width={70} />
          <Link
            href="#"
            className="absolute top-0 left-0 flex items-center justify-center w-full h-full"
          >
            <FaFacebook className="text-black text-3xl" />
          </Link>
        </div>
        <div className="relative">
          <Image src={BgGmail} alt="background image" width={70} />
          <Link
            href="#"
            className="absolute top-0 left-0 flex items-center justify-center w-full h-full"
          >
            <FaGoogle className="text-black text-3xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
