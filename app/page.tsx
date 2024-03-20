import Image from "next/image";
import { FaEye } from "react-icons/fa";

import Portrait from "@/public/olga.png";
import Service1 from "@/public/service1.png";
import Service2 from "@/public/service2.png";
import Service3 from "@/public/service3.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section
        id="front-section"
        className="relative flex flex-col sm:w-[35rem] md:w-[45rem] lg:w-[60rem] max-w-[60rem] my-20 gap-6"
      >
        <h1 className="text-lg font-medium">Лекторий Ольги Корка</h1>
        <h2 className="uppercase text-4xl font-extralight tracking-widest mb-[3rem]">
          Объясняя Финляндию
        </h2>

        <p className="w-1/2 mb-[2rem]">
          Образовательное пространство для тех, кто хочет сделать Финляндию
          своим домом
        </p>
        <button className="w-[8rem] h-[2.5rem] text-[white] bg-blue-main rounded-md ">
          Подробнее
        </button>
        <Image
          src={Portrait}
          alt="Olga Korka portrait"
          width={500}
          className="absolute -z-[10] hidden lg:block -top-20 -right-10"
        />
      </section>

      <section
        id="description"
        className="sm:w-[35rem] md:w-[45rem] lg:w-[60rem] max-w-[60rem] my-20 px-16"
      >
        <p className="mt-8">
          Проект создан для того, чтобы все русскоязычные жители Финляндии, а
          также те, кто интересуется финским языком, культурой и историей,
          построили глубокую и прочную связь со страной через понимание и
          принятие её культурно-исторических особенностей.
        </p>
        <p className="mt-6">
          Если вы цените свободу и толерантность, если вами движет любопытство,
          страсть к познанию и развитию, нам есть о чём поговорить!
        </p>
      </section>

      <section id="services" className="grid grid-cols-3 gap-4 my-20">
        <div className="flex flex-col items-center  p-4">
          <Image
            src={Service1}
            alt="art consultancy pic"
            width={250}
            className="mb-6"
          />
          <div className="mx-16">
            <h3 className="uppercase mb-2">Арт-консультации</h3>
            <p className="max-w-[30ch] mb-6">
              Объемное представление о городе за 2 часа
            </p>
            <Link href="#" className="btn text-coral-main ">
              <FaEye />
              Узнать больше
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center  p-4">
          <Image
            src={Service2}
            alt="art consultancy pic"
            width={250}
            className="mb-6"
          />
          <div className="mx-16">
            <h3 className="uppercase mb-2">Прогулки</h3>
            <p className="max-w-[30ch] mb-6">
              Объемное представление о городе за 2 часа
            </p>
            <Link href="#" className="btn text-coral-main ">
              <FaEye />
              Узнать больше
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <Image
            src={Service3}
            alt="art consultancy pic"
            width={250}
            className="mb-6"
          />
          <div className="mx-16">
            <h3 className="uppercase mb-2">Блог культуролога</h3>
            <p className="max-w-[30ch] mb-6">
              Объемное представление о городе за 2 часа
            </p>
            <Link href="#" className="btn text-coral-main ">
              <FaEye />
              Узнать больше
            </Link>
          </div>
        </div>
      </section>

      <section id="how-to-buy"></section>

      <section id="advantages"></section>

      <section id="feedback"></section>

      <section id="subscribe"></section>
    </main>
  );
}
