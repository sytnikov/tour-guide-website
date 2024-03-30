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
      <div className="flex items-center h-[6rem] w-full mx-12 mb-4 pt-10 pr-4 lg:pr-28">
        <Image
          src={Logo}
          alt="Olga Korka logo"
          width={90}
          height={70}
          quality={100}
          priority
        />
        <nav className="ml-auto">
          <ul className="flex gap-12">
            {navLinks.map((link, index) => (
              <li key={index} className="text-base">
                {link}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      
    </header>
  );
}
