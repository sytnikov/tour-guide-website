import FeedbackSlider from "../FeedbackSlider";

export default function FeedbackSection() {
  return (
    <section className="wrapper bg-blue-feedback-mobile-stain md:bg-blue-feedback-stain">
      <div className="relative h-[579px] md:h-[750px] px-3 mx-auto mb-16 md:mb-0 max-w-[80rem]">
        <h2 className="text-center pt-28 md:pt-40">
          Впечатления
        </h2>
        <FeedbackSlider />
      </div>
    </section>
  );
}
