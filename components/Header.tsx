import Image from "next/image";

import { navLinks } from "@/lib/data";
import Logo from "@/public/logo.png";

export default function Header() {
  return (
    <header>
      <div className="hidden lg:flex items-center h-[6rem] w-full mb-4 py-10 px-10 fixed z-[999] top-0 left-1/2 -translate-x-1/2 rounded-none bg-peach-light bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3.25rem] sm:w-[100%]">
        <Image
          src={Logo}
          alt="Olga Korka logo"
          width={90}
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
