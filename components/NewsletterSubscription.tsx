import { CiMail } from "react-icons/ci";

import SubmitBtn from "./SubmitBtn";

export default function NewsletterSubscription() {
  return (
    <form className="flex justify-between w-[50rem]">
      <div className="flex items-center gap-2 h-[3.5rem] w-[30rem] bg-peach-extralight rounded-xl">
        <CiMail className="ml-10 text-4xl"/>
        <input type="email" placeholder="Ваш email" className="h-[2.5rem] w-[20rem] bg-[transparent] text-black outline-none p-2"/>
      </div>
      <SubmitBtn actionName="Подписаться" />
    </form>
  );
}
