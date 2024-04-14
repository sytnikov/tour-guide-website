import Image, { StaticImageData } from "next/image";

type ArticleProps = {
  image: StaticImageData;
  name: string;
  source: string;
};

export default function Article({ image, name, source }: ArticleProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-center md:mx-10 lg:mx-2">
      <Image
        src={image}
        alt="service image"
        className="border-none rounded-2xl"
      />
      <h2 className="font-normal text-lg md:text-sm w-[70%]">{name}</h2>
      <p className="w-[70%] pb-10 ">{source}</p>
    </div>
  );
}
