'use client'
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  HeroSection,
  AboutSection,
  TeamSection,
  TechSection,
  ProjectSection,
  FormSection
} from '@features'

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
