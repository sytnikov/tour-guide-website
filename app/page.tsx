import React from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

import Bullet from "@/public/bullet.png";
import FeedbackBackground from "@/public/feedback-bg.png";
import Link from "next/link";
// import FeedbackSlider from "@/components/FeedbackSlider";
import { aboutMe, articleData, offers, yourDesires } from "@/lib/data";
import OlgaPortrait from "@/public/olga-about.png";
import ArticlesCarousel from "@/components/ArticlesCarousel";
import FeedbackSlider from "@/components/FeedbackSlider";
import HeaderBgPeach from "@/public/header-bg-yellow.png";
import HeaderBgWhite from "@/public/header-bg-white.png";
import HeaderStain from "@/public/header-stain.png";
import Portrait from "@/public/olga.png";
import Article from "@/components/Article";
import ContactBackground from "@/public/contact-bg.png";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section id="front-section" className="relative w-full h-[50rem]">
        <Image
          src={HeaderBgPeach}
          alt="Header Peach Background"
          quality={95}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          className="absolute top-0 -z-[10]"
          priority
        />
        <Image
          src={Portrait}
          alt="Olga Korka Portrait"
          // width={500}
          quality={95}
          priority
          className="absolute -z-[4] w-[22rem]  top-[20rem] right-3 lg:w-[33rem] lg:top-32 lg:right-24 xl:right-20 2xl:right-24 overflow-hidden"
        />
        <Image
          src={HeaderBgWhite}
          alt="Header White Background"
          quality={95}
          className="absolute top-[39rem] lg:top-[33rem] -z-[2]"
          priority
        />
        <Image
          src={HeaderStain}
          alt="Header Stain Image"
          quality={95}
          priority
          className="absolute -z-[1] w-[6rem] top-[38.5rem] left-5 lg:w-[12rem] lg:top-[34rem] lg:left-[16rem] xl:top-[35rem] xl:left-[20rem]"
        />
        <div className="flex flex-col text-center lg:text-left sm:w-full md:w-[45rem] lg:w-[60rem] xl:w-[70rem] max-w-[80rem] mx-3 lg:mx-0 pt-10 lg:pt-48 mb-20 gap-6 z-10">
          <h1 className="text-2xl font-medium lg:mx-10 xl:mx-16">
            Лекторий Ольги Корка
          </h1>
          <h2 className="font-sans uppercase text-4xl xl:text-5xl font-extralight tracking-widest lg:mx-10 xl:mx-16 lg:mb-[2rem]">
            Объясняя Финляндию
          </h2>

          <p className="text-left text-xl lg:w-1/2 mb-[2rem] font-extralight mx-5 lg:mx-10 xl:mx-16 leading-relaxed">
            Образовательное пространство для тех, кто хочет сделать Финляндию
            своим домом
          </p>
          <button className="w-[8rem] h-[2.5rem] mx-5 lg:mx-10 xl:mx-16 text-white font-normal bg-blue-main rounded-md ">
            Связаться
          </button>
        </div>
      </section>

      <section
        id="description"
        className="flex flex-col gap-6 text-xl font-extralight max-w-[70rem] mx-10 lg:mx-12 lg:mt-32 lg:mb-20 lg:px-16 leading-relaxed"
      >
        <p className="-mt-10 lg:mt-0">
          Проект создан для того, чтобы все русскоязычные жители Финляндии, а
          также те, кто интересуется финским языком, культурой и историей,
          построили глубокую и прочную связь со страной через понимание и
          принятие её культурно-исторических особенностей.
        </p>
        <p>
          Если вы цените свободу и толерантность, если вами движет любопытство,
          страсть к познанию и развитию, нам есть о чём поговорить!
        </p>
      </section>

      <section id="advantages">
        <div className="mx-6 lg:mx-12 my-20 max-w-[70rem]">
          <h2 className="text-center lg:text-left font-sans uppercase text-3xl lg:text-4xl font-extralight tracking-widest mb-[3rem]">
            Если вы хотите:
          </h2>
          <div>
            {yourDesires.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-base lg:text-xl font-extralight gap-7 mb-6"
              >
                <Image src={Bullet} alt="bullet icon" width={30} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="flex flex-col mx-0 lg:mx-12 my-8 lg:my-20 max-w-[70rem]"
      >
        <h2 className="text-center font-sans uppercase text-3xl lg:text-4xl font-extralight tracking-widest lg:mb-[3rem]">
          Мои предложения
        </h2>
        <div className="grid grid-col-1 gap-10 lg:grid-cols-3 lg:gap-4 mt-8 lg:mt-16">
          {offers.map((offer, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={offer.image}
                alt="offer picture"
                width={250}
                className="mb-6"
              />
              <div className="flex flex-col items-start mx-16">
                <h3 className="uppercase font-medium mb-2">{offer.name}</h3>
                <p className="max-w-[30ch] mb-6">{offer.description}</p>
                <Link href="#" className="btn text-coral-main ">
                  <FaEye />
                  Узнать больше
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="feedback"
        className="relative my-8 lg:my-16 w-full h-[40rem] lg:h-[35rem]"
      >
        <Image
          src={FeedbackBackground}
          alt="feedback section background"
          quality={95}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          className="absolute z-[-1]"
        />

        <h2 className="text-center lg:text-left font-sans uppercase text-3xl lg:text-4xl font-extralight tracking-widest w-full mt-28 lg:mt-16 lg:px-28">
          Впечатления
        </h2>
        <FeedbackSlider />
      </section>

      <section id="about">
        <div className="font-light mx-0 lg:mx-10 my-10 max-w-[70rem]">
          <h2 className="text-center font-sans uppercase text-4xl font-extralight tracking-widest mb-4 lg:mb-0">
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
              {aboutMe}
            </p>
          </div>
        </div>
      </section>

      <section id="contact-form">
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
      </section>

      <section id="services" className="hidden lg:block">
        <div className="mx-10 my-16">
          <h2 className="font-sans uppercase text-4xl font-extralight tracking-widest mb-[3rem]">
            А это будет интересно
          </h2>
          <div className="grid grid-cols-4">
            {articleData.map((article, index) => (
              <div key={index}>
                <Article
                  image={article.image}
                  name={article.name}
                  source={article.source}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="services-mobile" className="lg:hidden my-16 w-full">
        <h2 className="font-sans uppercase text-3xl font-extralight tracking-widest text-center mb-[3rem]">
          А это будет интересно
        </h2>
        <ArticlesCarousel />
      </section>
    </main>
  );
}
