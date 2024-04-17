import React from "react";
import Image from "next/image";

import FeedbackBackground from "@/public/feedback-bg.png";

// import FeedbackSlider from "@/components/FeedbackSlider";
import {
  aboutMe,
  articleData,
  offers,
  projectDescription,
  yourDesires,
} from "@/lib/data";
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
import Offer from "@/components/Offer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section id="front-section">
        <div className="relative w-full h-[50rem]">
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
            quality={100}
            priority
            className="absolute -z-[4] w-[22rem] top-[20rem] right-3 lg:w-[33rem] lg:top-32 lg:right-24 xl:right-20 2xl:right-24"
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
            quality={100}
            priority
            className="absolute -z-[1] w-[6rem] top-[38.5rem] left-5 lg:w-[12rem] lg:top-[34rem] lg:left-[16rem] xl:top-[35rem] xl:left-[20rem]"
          />
          <div className="text-center lg:text-left pt-6 lg:pt-48 mx-10 lg:mx-32 z-10">
            <h1 className="text-2xl font-medium mb-[1.5rem]">
              Проект Ольги Корка
            </h1>
            <h2 className="font-sans uppercase text-4xl xl:text-5xl font-extralight tracking-widest mb-[2.5rem]">
              Объясняя Финляндию
            </h2>

            <p className="text-left text-xl font-extralight leading-relaxed lg:w-1/2 mb-[1.5rem]">
              Образовательное пространство для тех, кто хочет сделать Финляндию
              своим домом
            </p>
            <div className="w-full text-left">
              <Button>Связаться</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="description">
        <div className="text-xl font-extralight mx-10 lg:mx-12 lg:mt-32 lg:mb-20 lg:px-16 leading-relaxed">
          <p className="-mt-10 lg:-mt-36 mb-6">{projectDescription.desc1}</p>
          <p>{projectDescription.desc2} </p>
        </div>
      </section>

      <section id="desires">
        <div className="mx-6 lg:mx-12 my-20">
          <h2 className="text-center lg:text-left font-sans uppercase text-3xl lg:text-4xl font-extralight tracking-widest mb-[2rem]">
            Если вы хотите:
          </h2>
          <div>
            {yourDesires.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-base lg:text-xl font-extralight gap-7 mb-6"
              >
                <Image src={item.image} alt="bullet icon" width={30} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="offers">
        <div className="mx-0 my-10">
          <h2 className="text-center font-sans uppercase text-3xl lg:text-4xl font-extralight tracking-widest mb-[2rem]">
            Мои предложения
          </h2>
          <div className="grid grid-col-1 lg:grid-cols-3">
            {offers.map((offer, index) => (
              <React.Fragment key={index}>
                <Offer
                  image={offer.image}
                  pre_name={offer.pre_name}
                  name={offer.name}
                  description={offer.description}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="feedback">
        <div className="relative w-full h-[40rem] lg:h-[35rem]">
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

          <h2 className="text-center lg:text-left font-sans uppercase text-3xl lg:text-4xl font-extralight tracking-widest pt-28 lg:pt-20 lg:px-36">
            Впечатления
          </h2>
          <FeedbackSlider />
        </div>
      </section>

      <section id="about">
        <div className="font-light mx-0 lg:mx-10 my-10">
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
          <h2 className="font-sans font-extralight uppercase text-center text-3xl lg:text-4xl tracking-widest mx-10 pt-28 lg:pt-36 mb-[2rem]">
            Остаемся на связи
          </h2>
          <ContactForm />
        </div>
      </section>

      <section id="articles" className="hidden lg:block">
        <div className="mx-10 my-16">
          <h2 className="font-sans uppercase text-4xl font-extralight tracking-widest mb-[3rem]">
            А это будет интересно
          </h2>
          <div className="grid grid-cols-4">
            {articleData.map((article, index) => (
              <React.Fragment key={index}>
                <Article
                  image={article.image}
                  name={article.name}
                  source={article.source}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section id="articles-mobile" className="lg:hidden my-16 w-full">
        <h2 className="font-sans uppercase text-3xl font-extralight tracking-widest text-center mb-[2rem]">
          А это будет интересно
        </h2>
        <ArticlesCarousel />
      </section>
    </main>
  );
}
