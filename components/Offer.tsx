import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

import { Button } from "./ui/button";

type OfferProps = {
  image: StaticImageData;
  pre_name: string;
  name: string;
  description: string;
  href: string;
};

export default function Offer({
  image,
  pre_name,
  name,
  description,
  href,
}: OfferProps) {
  return (
    <div className="flex flex-col items-center">
      <Image src={image} alt="offer picture" width={250} className="mb-6" />
      <div className="mx-16 lg:mx-8 mb-6">
        <h3 className="font-medium text-2xl">{pre_name}</h3>
        <h3 className="uppercase font-medium text-2xl mb-4">{name}</h3>
        <p className="max-w-[30ch] mb-3">{description}</p>
        <Button variant={"link"} className="px-0 text-base">
          <Link
            href={href}
            className="flex items-center justify-start gap-2 text-coral-main"
          >
            <FaEye />
            Узнать больше
          </Link>
        </Button>
      </div>
    </div>
  );
}
