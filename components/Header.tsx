import Image from "next/image";

import { navLinks } from "@/lib/data";
import Logo from "@/public/logo.png"

export default function Header() {
  return (
    <header className="flex items-center h-[6rem] w-full mt-4 mx-12 pr-4 lg:pr-28">
      <Image 
        src={Logo}
        alt="Olga Korka logo"
        width={70}
        height={70}
        quality={95}
        priority
      />
      <nav className="ml-auto">
        <ul className="flex gap-3">
          {navLinks.map((link, index) => (
            <li key={index} className="text-sm">{link}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
