import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import FooterLogo from "@/public/footer-logo.png";
import FooterBackground from "@/public/footer-bg.png";
import Link from "next/link";
import BgInstagram from "@/public/icon-bg-instagram.png";
import BgMail from "@/public/icon-bg-mail.png";
import BgGmail from "@/public/icon-bg-gmail.png";
import BgFacebook from "@/public/icon-bg-facebook.png";

export default function Footer() {
  return (
    <footer className="relative pt-48 pb-5 flex flex-col items-center w-full">
      <Image
        src={FooterBackground}
        alt="footer section background"
        width={3500}
        className="absolute top-0 w-full h-full -z-[5] object-cover"
      />
      <Image
        src={FooterLogo}
        alt="Olga Korka logo"
        width={130}
        height={130}
        quality={95}
        className="absolute -top-10 left-20 -z-[5] object-cover"
      />
      <div className="flex items-center justify-center gap-10 w-full">
        <div>
          <p className="text-white text-lg">Вопросы по экскурсиям и не только</p>
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
    </footer>
  );
}
