import Image from "next/image";

import { yourDesires } from "@/lib/data";

export default function Desires() {
  return (
    <section className="w-full">
      <div className="px-3 mx-auto mb-16 max-w-[80rem]">
        <h2 className="text-center md:text-left font-sans uppercase text-3xl lg:text-4xl font-extralight tracking-widest mb-[2rem]">
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
  );
}
