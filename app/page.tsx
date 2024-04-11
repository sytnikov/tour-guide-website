import Image from "next/image";
import { FaEye } from "react-icons/fa";

import Bullet from "@/public/bullet.png";
import FeedbackBackground from "@/public/feedback-bg.png";
import ContactBackground from "@/public/contact-bg.png";
import Link from "next/link";
// import FeedbackSlider from "@/components/FeedbackSlider";
import { articles, offers, yourDesires } from "@/lib/data";
import OlgaPortrait from "@/public/olga-about.png";
import ContactForm from "@/components/ContactForm";
import ServicesCarousel from "@/components/ServicesCarousel";
import FeedbackSlider from "@/components/FeedbackSlider";
import HeaderBgPeach from "@/public/header-bg-yellow.png";
import HeaderBgWhite from "@/public/header-bg-white.png";
import HeaderStain from "@/public/header-stain.png";
import Portrait from "@/public/olga.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
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
          className="absolute -z-[4] w-[22rem] lg:w-[33rem] top-[27rem] right-3 lg:top-32 lg:right-24 xl:right-20 2xl:right-24 overflow-hidden"
        />
        <Image
          src={HeaderBgWhite}
          alt="Header White Background"
          quality={95}
          className="absolute top-[46rem] lg:top-[33rem] -z-[2]"
          priority
        />
        <Image
          src={HeaderStain}
          alt="Header Stain Image"
          width={200}
          quality={95}
          priority
          className="absolute -z-[1] hidden lg:block lg:top-[33rem] lg:left-[16rem] xl:top-[35rem] xl:left-[20rem]"
        />
        <div className="flex flex-col text-center lg:text-left sm:w-full md:w-[45rem] lg:w-[60rem] xl:w-[70rem] max-w-[80rem] mx-3 lg:mx-0 mt-48 mb-20 gap-6 z-10">
          <h1 className="text-2xl font-medium lg:mx-10">
            Лекторий Ольги Корка
          </h1>
          <h2 className="font-sans uppercase text-4xl xl:text-5xl font-extralight tracking-widest lg:mx-10 lg:mb-[2rem]">
            Объясняя Финляндию
          </h2>

          <p className="text-left text-xl lg:w-1/2 mb-[2rem] font-extralight mx-5 lg:mx-10 leading-relaxed">
            Образовательное пространство для тех, кто хочет сделать Финляндию
            своим домом
          </p>
          <button className="w-[8rem] h-[2.5rem] mx-5 lg:mx-10 text-white font-normal bg-blue-main rounded-md ">
            Связаться
          </button>
        </div>
      </section>

      <section
        id="description"
        className="flex flex-col gap-6 text-xl font-extralight max-w-[70rem] mx-10 lg:mx-12 lg:mt-32 lg:mb-20 lg:px-16 leading-relaxed"
      >
        <p className="mt-12 lg:mt-24">
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

      <section
        id="advantages"
      >
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

      {/* <section id="how-to-buy" className="flex flex-col mx-12 my-20">
        <h2 className="text-lg font-medium text-center mb-24">
          Как приобрести тур, прогулку или консультацию?
        </h2>
        <div className="max-w-[60rem] pl-16">
          <div className="flex gap-8 items-start justify-center mb-16 pl-[5rem] pr-[15rem]">
            <div className="flex items-center justify-center px-3 py-1 bg-blue-main rounded-full font-medium">
              1
            </div>
            <div className="leading-10">
              <h3 className="text-sm font-medium mb-3">
                Выберите тур или консультацию
              </h3>
              <p className="text-sm leading-7">
                Чтобы убедиться в том, что лекция вам интересна, и прочитайте
                описание. Понравившиеся продукты добавьте в корзину.
              </p>
            </div>
          </div>
          <div className="flex gap-8 items-start justify-center mb-16 pl-[20rem]">
            <div className="flex items-center justify-center px-3 py-1 bg-peach-main rounded-full font-medium">
              2
            </div>
            <div className="leading-10">
              <h3 className="text-sm font-medium mb-3">Оформите заказ</h3>
              <p className="text-sm leading-7">
                Доступ к материалам в этом Лектории предоставляется только
                зарегистрированным пользователям. Если вы уже приобретали что-то
                раньше, войдите под своим логином.
              </p>
            </div>
          </div>
          <div className="flex gap-8 items-start justify-center mb-16 px-[9rem]">
            <div className="flex items-center justify-center px-3 py-1 bg-coral-main rounded-full font-medium">
              3
            </div>
            <div className="leading-10">
              <h3 className="text-sm font-medium mb-3">Оплатите заказ</h3>
              <p className="text-sm leading-7">
                Вы можете оплатить заказ картой или при помощи PayPal. Некоторые
                заказы требуют обработки в ручном режиме: доступ к записи лекций
                и вебинаров, которые уже состоялись, вы получите не позднее 24
                часов с момента оплаты. На вашу электронную почту придет
                уведомление со ссылкой в личный кабинет и доступом к оплаченным
                материалам.
              </p>
            </div>
          </div>
        </div>
      </section> */}

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

      <section
        id="about"
        className="font-light max-w-[70rem] lg:mx-12 lg:mt-32 mb-36"
      >
        <h2 className="text-center lg:text-left font-sans uppercase text-4xl font-extralight tracking-widest mb-6">
          Обо мне
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          <Image
            src={OlgaPortrait}
            alt="Olga Korka portrait"
            width={500}
            quality={100}
            className="lg:p-2 lg:mr-20"
          />
          <p className="text-base mx-16 font-extralight leading-relaxed lg:max-w-[20rem] lg:ml-6 lg:mr-12">
            Я Ольга Корка. Моя основная работа связана с антиквариатом, отсюда
            и увлечение историей, культурой и искусством. Люблю Хельсинки, живу
            здесь 10 лет, не устаю открывать для себя все новые стороны этого
            прекрасного северного города и его окрестностей. Люблю делиться
            с путешественниками своими открытиями, общаться, делать жизнь
            радостнее и увлекательнее. Самая главная награда для меня, когда
            путешественники говорят: «Мы не ожидали, что город окажется ТАКИМ
            интересным!»
          </p>
        </div>
      </section>

      {/* <section id="subscribe" className="relative mt-36 w-full">
        <Image
          src={NewsletterBackground}
          alt="newsletter subscription section background"
          width={1000}
          className="absolute top-32 -z-[5]"
        />
        <div className="flex flex-col justify-center items-center my-20">
          <h2 className="text-4xl font-black mb-36 w-[50rem]">
            Остаемся на связи?
          </h2>
          <NewsletterSubscription />
        </div>
      </section> */}

      <section
        id="contact-form"
        className="relative w-full h-[40rem]"
      >
        <Image
          src={ContactBackground}
          alt="contact section background"
          quality={95}
          fill
          sizes="50vw"
          style={{
            objectFit: "cover",
          }}
          className="absolute top-0 z-[-1]"
        />
        <div className="flex flex-col justify-center items-center mx-12">
          <h2 className="font-sans uppercase text-center lg:text-left text-3xl lg:text-4xl font-extralight tracking-widest mt-20 mb-4 lg:mb-[3rem]">
            Остаемся на связи?
          </h2>
          <ContactForm />
        </div>
      </section>

      <section
        id="services"
        className="hidden lg:block mx-12 my-16 max-w-[70rem]"
      >
        <h2 className="font-sans uppercase text-4xl font-extralight tracking-widest mb-[3rem]">
          А это будет интересно
        </h2>
        {/* use Service component here */}
        <div className="grid grid-cols-3 gap-4 mt-16">
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={article.image}
                alt="article picture"
                height={300}
                quality={95}
                className="rounded-2xl mb-6"
              />
              <div className="flex flex-col items-start mx-10">
                <h3 className="font-light mb-8">{article.name}</h3>
                <p className="mb-6">{article.source}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services-mobile" className="lg:hidden my-16 w-full">
        <h2 className="font-sans uppercase text-3xl font-extralight tracking-widest text-center mb-[3rem]">
          А это будет интересно
        </h2>
        <ServicesCarousel />
      </section>
    </main>
  );
}
