import Image from "next/image";

import { Button } from "../ui/button";
import Portrait from "@/public/olga.png";
import AaltoStain from "@/public/stains/aalto-stain.svg";

export default function HeroSection() {
  return (
    <section className="wrapper bg-peach-mobile-stain md:bg-peach-stain">
      <div className="relative h-[729px] md:h-[750px] px-3 mx-auto mb-16 max-w-[25rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] ">
        <Image
          src={Portrait}
          alt="Olga Korka Portrait"
          quality={100}
          priority
          className="absolute z-[1] top-72 right-0 w-[30rem]
          md:top-10 md:w-[40rem] 
          lg:top-14 lg:w-[40rem]"
        />
        <Image
          src={AaltoStain}
          alt="Aalto vase stain"
          quality={100}
          priority
          className="absolute z-[1] -bottom-5 w-[7rem]
          md:-bottom-6 md:left-12 md:w-[10rem] 
          lg:-bottom-12 lg:left-64 lg:w-[12rem]
          xl:left-96"
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
