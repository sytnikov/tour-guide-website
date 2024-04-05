import Image from "next/image";
import { FaEye } from "react-icons/fa";

import Bullet from "@/public/bullet.png";
import FeedbackBackground from "@/public/feedback-bg.png";
import NewsletterBackground from "@/public/newsletter-bg.png";
import Link from "next/link";
import FeedbackSlider from "@/components/FeedbackSlider";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { offers, yourDesires } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section
        id="front-section"
        className="relative flex flex-col sm:w-[35rem] md:w-[45rem] lg:w-[70rem] max-w-[80rem] mt-48 mb-20 gap-6"
      >
        <h1 className="text-2xl font-medium">Лекторий Ольги Корка</h1>
        <h2 className="font-sans uppercase text-5xl font-extralight tracking-widest mb-[2rem]">
          Объясняя Финляндию
        </h2>

        <p className="text-xl w-1/2 mb-[2rem]">
          Образовательное пространство для тех, кто хочет сделать Финляндию
          своим домом
        </p>
        <button className="w-[8rem] h-[2.5rem] text-white font-normal bg-blue-main rounded-md ">
          Связаться
        </button>
      </section>

      <section
        id="description"
        className="text-xl font-light max-w-[70rem] mx-12 mt-32 mb-20 px-16"
      >
        <p className="mt-16">
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

      <section
        id="advantages"
        className="flex flex-col mx-12 my-20 max-w-[70rem]"
      >
        <h2 className="font-sans uppercase text-4xl font-extralight tracking-widest mb-[3rem]">
          Если вы хотите:
        </h2>
        <div>
          {yourDesires.map((item, index) => (
            <div
              key={index}
              className="flex items-center text-xl font-extralight gap-7 mb-6"
            >
              <Image src={Bullet} alt="bullet icon" width={30} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-12 my-20 max-w-[70rem]">
        <h2 className="font-sans uppercase text-4xl font-extralight tracking-widest mb-[3rem]">
          Мои предложения
        </h2>
        <div className="grid grid-cols-3 gap-4 mt-16">
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

      <section id="feedback" className="relative flex flex-col items-center w-full">
        <Image
          src={FeedbackBackground}
          alt="feedback section background"
          width={2500}
          className="absolute top-0 left-0 w-auto h-[100%] z-[-1] object-cover"
        />
        <div className="flex flex-col justify-center items-center mx-12 my-20 max-w-[70rem]">
          <h2 className="text-left font-sans uppercase text-4xl font-extralight tracking-widest w-full">Впечатления</h2>
          <FeedbackSlider />
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
    </main>
  );
}
