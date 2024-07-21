import SubmitBtn from "./SubmitBtn";

export default function ContactForm() {
  return (
    <form className="sm:flex justify-center gap-4 md:gap-14 lg:gap-28 mx-10 ">
      <div className="flex flex-col gap-4 lg:gap-6">
        <input
          type="text"
          placeholder="Имя"
          className="h-[2.5rem] w-full sm:w-[20rem] bg-peach-extralight outline-none rounded-xl p-2"
        />
        <input
          type="email"
          placeholder="Ваш email"
          className="h-[2.5rem] w-full sm:w-[20rem] bg-peach-extralight outline-none rounded-xl p-2 mb-4"
        />
      </div>
      <div className="flex flex-col gap-4 lg:gap-6">
        <input
          type="tel"
          placeholder="Номер телефона"
          className="h-[2.5rem] w-full sm:w-[20rem] bg-peach-extralight outline-none rounded-xl p-2"
        />
        <textarea
          rows={6}
          placeholder="Ваше сообщение"
          className="bg-peach-extralight outline-none rounded-xl p-2"
        ></textarea>

        <SubmitBtn actionName="Отправить" />
      </div>
    </form>
  );
}
