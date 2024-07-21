import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import FooterLogo from "@/public/footer-logo.png";
import FooterBackground from "@/public/footer-bg.png";
import FooterBackgroundMobile from "@/public/footer-bg-mobile.png";
import BgInstagram from "@/public/icon-bg-instagram.png";
import BgMail from "@/public/icon-bg-mail.png";
import BgGmail from "@/public/icon-bg-gmail.png";
import BgFacebook from "@/public/icon-bg-facebook.png";
import { navLinks } from "@/lib/data";
import SocialMediaLinksMobile from "./SocialMediaLinksMobile";

export default function Footer() {
  return (
    <footer className="wrapper bg-footer-mobile-stain md:bg-footer-stain">
      <div className="relative h-[530px] px-3 mx-auto max-w-[80rem]">
        <Image
          src={FooterLogo}
          alt="Olga Korka logo"
          width={130}
          height={130}
          quality={95}
          className="absolute -top-16 lg:-top-10 right-5 md:left-10 z-[1] object-cover"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-base md:text-lg mx-10 pt-20 md:pt-64">
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
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </nav>
          </div>
          <SocialMediaLinksMobile />
        </div>

        
      </div>
    </footer>
  );
}
