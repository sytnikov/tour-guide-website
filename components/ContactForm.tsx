import SubmitBtn from "./SubmitBtn";

export default function ContactForm() {
  return (
    <form className="flex justify-center gap-28">
      <div className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Имя"
          className="h-[2.5rem] w-[20rem] bg-peach-extralight outline-none rounded-xl p-2"
        />
        <input
          type="email"
          placeholder="Ваш email"
          className="h-[2.5rem] w-[20rem] bg-peach-extralight outline-none rounded-xl p-2"
        />
      </div>
      <div className="flex flex-col gap-6">
        <input
          type="tel"
          placeholder="Номер телефона"
          className="h-[2.5rem] w-[20rem] bg-peach-extralight outline-none rounded-xl p-2"
        />
        <textarea
          rows={8}
          placeholder="Ваше сообщение"
          className="bg-peach-extralight outline-none rounded-xl p-2"
        ></textarea>

        <SubmitBtn actionName="Отправить" />
      </div>
    </form>
  );
}
