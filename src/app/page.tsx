'use client'
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/features/AboutSection";
import { HeroSection } from "@/components/features/HeroSection";
import TeamSection from "@/components/features/TeamSection";
import { Footer } from "@/components/layout/Footer";
import { ProjectSection } from "@/components/features/ProjectSection";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection
          image={'/icon.png'}
          title="Sobre BugHunter"
          paragraphs={[
            "Somos un equipo de desarrolladores apasionados por crear páginas web de alta calidad. Como freelancers, ofrecemos soluciones personalizadas para todo tipo de proyectos: desde sitios corporativos hasta aplicaciones interactivas. En Bug Hunters, ayudamos a las empresas a destacar en línea con experiencias digitales intuitivas, funcionales y seguras.",
            "Nos caracteriza la atención al detalle, el compromiso con la excelencia y la búsqueda constante de mejoras.",
            "Únete a nosotros y forma parte de un equipo dinámico, donde la innovación, la creatividad y el trabajo en equipo son la clave para alcanzar el éxito. ¡Si tienes una idea, nosotros la hacemos realidad!"
          ]}
          stats={[
            { value: "50+", label: "Proyectos realizados" },
            { value: "100%", label: "Satisfacción clientes" },
            { value: "8+", label: "Años de experiencia" },
          ]}
        />
        <TeamSection />
        <ProjectSection />
      </main>
      <Footer />

    </div>
  );
}
