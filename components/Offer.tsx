import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

type OfferProps = {
  image: StaticImageData,
  name: string,
  description: string,
}

export default function Offer({ image, name, description }: OfferProps) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt="offer picture"
        width={250}
        className="mb-6"
      />
      <div className="flex flex-col items-start mx-16">
        <h3 className="uppercase font-medium mb-2">{name}</h3>
        <p className="max-w-[30ch] mb-6">{description}</p>
        <Link href="#" className="btn text-coral-main ">
          <FaEye />
          Узнать больше
        </Link>
      </div>
    </div>
  );
}
