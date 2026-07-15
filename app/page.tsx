import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FormationsSection } from "@/components/FormationsSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MentorsSection } from "@/components/MentorsSection";
import { NumbersSection } from "@/components/NumbersSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <FormationsSection />
        <TechnologiesSection />
        <TestimonialsSection />
        <PartnersSection />
        <MentorsSection />
        <NumbersSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
