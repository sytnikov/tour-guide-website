import FeedbackSlider from "../FeedbackSlider";

export default function FeedbackSection() {
  return (
    <section className="wrapper bg-blue-feedback-stain">
      <div className="relative h-[750px] px-3 mx-auto max-w-[80rem]">
        <h2 className="text-center pt-40 font-sans uppercase text-3xl font-extralight tracking-widest lg:text-4xl">
          Впечатления
        </h2>
        <FeedbackSlider />
      </div>
    </section>
  );
}
