import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import BgInstagram from "@/public/icon-bg-instagram.png";
import BgMail from "@/public/icon-bg-mail.png";
import BgGmail from "@/public/icon-bg-gmail.png";
import BgFacebook from "@/public/icon-bg-facebook.png";

export default function SocialMediaLinksMobile() {
  return (
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
  );
}
