'use client'
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/features/HeroSection";
import { AboutSection } from "@/components/features/AboutSection";
import { TeamSection } from "@/components/features/TeamSection";
import { ProjectSection } from "@/components/features/ProjectSection";
import { FormSection } from "@/components/features/FormSection";
import { Footer } from "@/components/layout/Footer";
import { TechSection } from "@/components/features/TechSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center dark:bg-[#1E1E1E] bg-[#FFFFFB]">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <TechSection />
        <ProjectSection />
        <FormSection />
      </main>
      <Footer />

    </div>
  );
}
