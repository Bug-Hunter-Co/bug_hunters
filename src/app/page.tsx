'use client'
import { Navbar } from "@/components/layout/Navbar";
import { ButtonMode } from "@/components/ui/ButtonMode";
import file from "./favicon.ico"

import AboutSection from "@/components/features/AboutSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main>
        <AboutSection
          image={'/icon.png'}
          title="Sobre BugHunter"
          paragraphs={[
            "Somos un equipo de desarrolladores apasionados por crear páginas web de alta calidad para nuestros clientes. Como freelancers, nos especializamos en ofrecer soluciones personalizadas para todo tipo de proyectos web, desde sitios corporativos hasta aplicaciones interactivas. En Bug Hunters, nuestra misión es ayudar a las empresas a destacar en línea, creando experiencias digitales intuitivas, funcionales y seguras.",
            "Lo que nos distingue es nuestra obsesión por el detalle y el compromiso con la excelencia. Cada línea de código que escribimos está pensada para asegurar un rendimiento óptimo, una interfaz amigable y, sobre todo, la satisfacción total del cliente. Siempre estamos en la búsqueda de nuevas oportunidades para aprender y mejorar, y no nos detenemos hasta que cada 'bug' ha sido cazado.",
            "Únete a nosotros y forma parte de un equipo dinámico, donde la innovación, la creatividad y el trabajo en equipo son la clave para alcanzar el éxito. ¡Si tienes una idea, nosotros la hacemos realidad!"
          ]}
          stats={[
            { value: "50+", label: "Proyectos realizados" },
            { value: "100%", label: "Satisfacción clientes" },
            { value: "8+", label: "Años de experiencia" },
          ]}
        />
      </main>


    </div>
  );
}
