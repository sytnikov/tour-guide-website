import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import { navLinks } from "@/lib/data";
import Logo from "@/public/logo.png";
import FooterBackground from "@/public/footer-bg.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-[16rem]">
      {/* <Image
        src={FooterBackground}
        alt="footer section background"
        width={1500}
        className="absolute -top-40 -z-[5]"
      /> */}
      <Image
            src={Logo}
            alt="Olga Korka logo"
            width={70}
            height={70}
            quality={95}
            priority
          />
      <div className="flex items-end justify-evenly w-full">
        <nav>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <li key={index} className="text-white text-sm">
                {link}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex">
          <div className="flex gap-2 mt-auto">
            <div className="bg-cover bg-instagram">
            <Link href="#" className="btn btn-icon">
              <FaInstagram/>
            </Link>
            </div>
            
            <Link href="#" className="btn btn-icon">
              <CiMail />
            </Link>
            <Link href="#" className="btn btn-icon">
              <FaFacebook />
            </Link>
            <Link href="#" className="btn btn-icon">
              <FaGoogle />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
