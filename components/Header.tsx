import Image from "next/image";

import { navLinks } from "@/lib/data";
import Logo from "@/public/logo.png";
import HeaderBgPeach from "@/public/header-bg-yellow.png";
import HeaderBgWhite from "@/public/header-bg-white.png";
import Portrait from "@/public/olga.png";

export default function Header() {
  return (
    <header className="relative">
      <Image
        src={HeaderBgPeach}
        alt="Header Peach Background"
        width={2500}
        quality={95}
        priority
        className="absolute -z-[5] top-0 w-auto"
      />
      <Image
        src={Portrait}
        alt="Olga Korka Portrait"
        width={700}
        quality={95}
        priority
        className="absolute -z-[3] hidden lg:block top-20 lg:-right-10 xl:right-0 2xl:right-24 "
      />
      <Image
        src={HeaderBgWhite}
        alt="Header White Background"
        width={2500}
        quality={95}
        priority
        className="absolute -z-[1] top-[33rem] w-auto"
      />
      <div className="flex items-center h-[6rem] w-full mb-4 py-10 px-10 fixed z-[999] top-0 left-1/2 -translate-x-1/2 rounded-none bg-peach-light bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3.25rem] sm:w-[100%]">
        <Image
          src={Logo}
          alt="Olga Korka logo"
          width={90}
          height={70}
          quality={100}
          priority
          className="p-2"
        />
        <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex items-center text-nowrap gap-4">
            {navLinks.map((link, index) => (
              <li key={index} className="text-base text-black/70">
                {link}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
