import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import dynamic from "next/dynamic";

const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection").then(mod => mod.ServicesSection));
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection").then(mod => mod.ProjectsSection));
const TechSection = dynamic(() => import("@/components/sections/TechSection").then(mod => mod.TechSection));
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection").then(mod => mod.ProcessSection));
const AboutSection = dynamic(() => import("@/components/sections/AboutSection").then(mod => mod.AboutSection));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then(mod => mod.ContactSection));

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
