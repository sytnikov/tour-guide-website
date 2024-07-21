import React from "react";

import Offer from "../Offer";
import { offers } from "@/lib/data";

export default function OffersSection() {
  return (
    <section className="w-full">
      <div className="px-3 mx-auto max-w-[80rem]">
        <h2 className="text-center font-sans uppercase text-3xl lg:text-4xl font-extralight tracking-widest mb-[2rem]">
          Мои предложения
        </h2>
        <div className="grid grid-col-1 md:grid-cols-3">
          {offers.map((offer, index) => (
            <React.Fragment key={index}>
              <Offer
                image={offer.image}
                pre_name={offer.pre_name}
                name={offer.name}
                description={offer.description}
                href={offer.href}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
