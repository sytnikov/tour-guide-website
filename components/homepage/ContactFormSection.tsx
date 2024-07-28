import ContactForm from "../ContactForm";

export default function ContactFormSection() {
  return (
    <section className="wrapper bg-contact-form-stain">
      <div className="w-full h-[820px] px-3 mx-auto mb-16 max-w-[80rem]">
        <h2 className="text-center  pt-64 sm:pt-72 mb-[2rem]">
          Остаемся на связи
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
