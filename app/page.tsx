import HeroSection from "@/components/homepage/HeroSection";
import ProjectDescriptionSection from "@/components/homepage/ProjectDescriptionSection";
import DesiresSection from "@/components/homepage/DesiresSection";
import OffersSection from "@/components/homepage/OffersSection";
import FeedbackSection from "@/components/homepage/FeedbackSection";
import AboutSection from "@/components/homepage/AboutSection";
import ContactFormSection from "@/components/homepage/ContactFormSection";
import ArticlesSection from "@/components/homepage/ArticlesSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <HeroSection />
      <ProjectDescriptionSection />
      <DesiresSection />
      <OffersSection />
      <FeedbackSection />
      <AboutSection />
      <ContactFormSection />
      <ArticlesSection />
    </main>
  );
}
