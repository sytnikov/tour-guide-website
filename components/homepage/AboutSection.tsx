import Image from "next/image";

import OlgaPortrait from "@/public/olga-about.png";
import { aboutMe } from "@/lib/data";

export default function AboutSection() {
  return (
    <section className="w-full">
      <div className="mx-auto mb-16">
        <h2 className="text-center font-sans uppercase text-3xl lg:text-4xl font-extralight tracking-widest mb-[2rem]">
          Обо мне
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <Image
            src={OlgaPortrait}
            alt="Olga Korka portrait"
            width={500}
            quality={100}
          />
          <p className="text-base mx-16 font-extralight leading-relaxed lg:max-w-[20rem] lg:ml-6 lg:mr-12">
            {aboutMe.text}
          </p>
        </div>
      </div>
    </section>
  );
}
