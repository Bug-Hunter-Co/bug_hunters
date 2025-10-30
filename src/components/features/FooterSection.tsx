import { Jacquard_12 } from "next/font/google"
import { font_paragraph, font_title } from "../ui/fonts"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const FooterSection = () => {
    return (
        <footer className={`${font_title.className} flex flex-col justify-center items-center bg-[#E1E1E1] w-full gap-4 dark:bg-[#2A2A2A]`}>
  <div className="w-7/10 max-xl:w-8/10 max-lg:w-9/10 flex items-center justify-between text-gray-900 dark:text-[#E0E0E0] gap-8 max-lg:text-center max-md:items-center border-b border-[#223843] dark:border-[#B0B0B0] py-9 pb-5">

    <div className="flex flex-col gap-2 items-start justify-start">
      <h3 className="font-extrabold text-xl">BugHunter</h3>
      <div>
        <p>Transformando visiones en realidades</p>
        <p>digitales extraordinarias.</p>
      </div>
    </div>


    <div className="flex flex-col gap-2">
      <div>
        <h3 className="font-bold">Enlaces</h3>
        <ul className="flex flex-col gap-1.5 pt-1.5 text-sm">
          <li className="cursor-pointer hover:text-[#43565e] dark:hover:text-white transition-colors">Nosotros</li>
          <li className="cursor-pointer hover:text-[#43565e] dark:hover:text-white transition-colors">Proyectos</li>
          <li className="cursor-pointer hover:text-[#43565e] dark:hover:text-white transition-colors">Contáctanos</li>
        </ul>
      </div>
    </div>


    <div className="flex flex-col items-start gap-3 p-6">
      <h2 className="font-semibold">Síguenos</h2>
      <div className="flex gap-3">
        <div className="p-2 border border-gray-400 dark:border-stone-500 rounded-md text-gray-600 dark:text-stone-300 hover:text-gray-800 dark:hover:text-white hover:border-gray-600 dark:hover:border-stone-300 cursor-pointer transition">
          <FaGithub size={24} />
        </div>
        <div className="p-2 border border-gray-400 dark:border-stone-500 rounded-md text-gray-600 dark:text-stone-300 hover:text-gray-800 dark:hover:text-white hover:border-gray-600 dark:hover:border-stone-300 cursor-pointer transition">
          <FaLinkedin size={24} />
        </div>
        <div className="p-2 border border-gray-400 dark:border-stone-500 rounded-md text-gray-600 dark:text-stone-300 hover:text-gray-800 dark:hover:text-white hover:border-gray-600 dark:hover:border-stone-300 cursor-pointer transition">
          <FaEnvelope size={24} />
        </div>
      </div>
    </div>
  </div>


  <div className="w-7/10 max-xl:w-8/10 max-lg:w-9/10 flex flex-col sm:flex-row justify-between items-center text-xs text-[#37484E] dark:text-stone-300 pb-6 pt-2">
    <p >© 2025 BugHunter. Todos los derechos reservados.</p>
    <p className="mt-1 sm:mt-0">Innovación y confianza en cada línea de código</p>
  </div>
</footer>


    )
}
