import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechSection } from "@/components/sections/TechSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <TechSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
