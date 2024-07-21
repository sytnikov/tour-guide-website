import { projectDescription } from "@/lib/data";

export default function ProjectDescription() {
  return (
    <section className="w-full">
      <div className="text-xl font-extralight leading-relaxed px-3 mx-auto mb-16 max-w-[80rem]">
        <p className="mb-6">{projectDescription.desc1}</p>
        <p>{projectDescription.desc2} </p>
      </div>
    </section>
  );
}
