import Image, { StaticImageData } from "next/image";

type FeedbackEntryProps = {
  avatar: StaticImageData;
  date: string;
  name: string;
  text: string;
};

export default function FeedbackEntry({
  avatar,
  date,
  name,
  text,
}: FeedbackEntryProps) {
  return (
    <div className="flex flex-col justify-center p-10 lg:mx-32 lg:px-28 lg:py-16">
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={avatar}
          alt="avatar image"
          width={90}
          className="rounded-full"
        />
        <div>
          <h3 className="font-medium mb-3">{name}</h3>
          <p className="font-medium mb-4">{date}</p>
        </div>
      </div>
      <p className="hidden lg:block">{text}</p>
      <p className="lg:hidden">{text.slice(0, 200)}...<small className="text-base undeline">Читать далее</small></p>
    </div>
  );
}
