import Image from "next/image";

import ContactBackground from "@/public/contact-bg.png";
import ContactForm from "./ContactForm";

export default function StayInTouch() {
  return (
    <div className="relative w-full h-[45rem]">
      <Image
        src={ContactBackground}
        alt="contact section background"
        quality={95}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className="absolute top-0 z-[-1]"
      />
      <h2 className="font-sans font-extralight uppercase text-center text-3xl lg:text-4xl tracking-widest mx-10 pt-28 lg:pt-36 mb-8 lg:mb-[3rem]">
        Остаемся на связи
      </h2>
      <ContactForm />
    </div>
  );
}
