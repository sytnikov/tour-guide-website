import Image from "next/image";

import { Button } from "../ui/button";
import Portrait from "@/public/olga.png";

export default function HeroSection() {
  return (
    <section className="wrapper bg-peach-stain">
      <div className="relative h-[750px] px-3 mx-auto mb-16 max-w-[25rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] ">
        <Image
          src={Portrait}
          alt="Olga Korka Portrait"
          quality={100}
          priority
          className="absolute z-[1] top-72 right-0 w-[22rem]
          sm:w-[33rem]
          md:top-10 md:w-[40rem] 
          lg:top-14 lg:w-[40rem]"
        />
        <div className="text-center pt-6 md:text-left md:pt-24 md:w-[60%] lg:pt-48 lg:w-full">
          <h1 className="text-2xl font-medium mb-[1.5rem]">
            Проект Ольги Корка
          </h1>
          <h2 className="font-sans uppercase text-3xl font-extralight tracking-widest mb-[2.5rem] md:text-4xl lg:text-5xl lg:w-[70%]">
            Объясняя Финляндию
          </h2>
          <p className="text-left text-xl font-extralight leading-relaxed mb-[1.5rem] md:w-[50%]">
            Образовательное пространство для тех, кто хочет сделать Финляндию
            своим домом
          </p>
          <div className="w-full text-left">
            <Button>Связаться</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
